<script lang="ts">
	import { onMount, onDestroy, getContext } from 'svelte';
	import init, { Grid, type InitOutput } from './game_of_life.js';
	import { theme } from '$lib/stores/theme';
	import LexiconCaroussel from './LexiconCaroussel.svelte';
	import ClearCanvasButton from './ClearCanvasButton.svelte';
	import RandomizeCanvasButton from './RandomizeCanvasButton.svelte';
	import ToggleControlButton from './ToggleControlButton.svelte';
	import type { Writable } from 'svelte/store';

	const showMainContent = getContext<Writable<boolean>>('showMainContent');

	type RGBA = [number, number, number, number];

	function parseRgba(s: string): RGBA {
		const m = s.match(/[\d.]+/g)!.map(Number);
		return [m[0] / 255, m[1] / 255, m[2] / 255, m[3] ?? 1];
	}

	let colorBackground = 'rgba(10, 12, 12, 0.35)';
	let colorAlive = 'rgba(80, 200, 140, 0.25)';
	let colorDead = 'rgba(255,255,255,0.04)';

	const CELL_SIZE = 20;
	const PADDING = CELL_SIZE * 0.1;
	const TARGET_FPS = 8;
	const FRAME_TIME = 1000 / TARGET_FPS;

	let lastTime = 0;
	let wasm: InitOutput;
	let grid: Grid;
	let canvas: HTMLCanvasElement | null = null;
	let gl: WebGL2RenderingContext | null = null;
	let rafId: number;

	let fadeValues: Float32Array;
	const FADE_SPEED = 0.08;

	theme.subscribe((current) => {
		if (current === 'light') {
			colorBackground = 'rgba(248, 250, 252, 0.95)';
			colorAlive = 'rgba(0, 102, 204, 0.12)';
			colorDead = 'rgba(20, 40, 80, 0.035)';
		} else {
			colorBackground = 'rgba(10, 12, 12, 0.35)';
			colorAlive = 'rgba(80, 200, 140, 0.25)';
			colorDead = 'rgba(255,255,255,0.04)';
		}
		if (gl) uploadUniforms();
	});

	let program: WebGLProgram;
	let vao: WebGLVertexArrayObject;
	let cellTex: WebGLTexture;
	let uBackground: WebGLUniformLocation;
	let uAlive: WebGLUniformLocation;
	let uDead: WebGLUniformLocation;
	let uGridWidth: WebGLUniformLocation;
	let uCellSize: WebGLUniformLocation;
	let uPadding: WebGLUniformLocation;
	let uResolution: WebGLUniformLocation;
	let uRadius: WebGLUniformLocation;

	const VERT_SRC = /* glsl */ `#version 300 es
precision highp float;
out vec2 vUv;
void main() {
    vec2 positions[6] = vec2[6](
        vec2(-1,-1), vec2( 1,-1), vec2(-1, 1),
        vec2(-1, 1), vec2( 1,-1), vec2( 1, 1)
    );
    vec2 pos = positions[gl_VertexID];
    vUv = pos * 0.5 + 0.5;
    vUv.y = 1.0 - vUv.y;
    gl_Position = vec4(pos, 0.0, 1.0);
}
`;

	const FRAG_SRC = /* glsl */ `#version 300 es
precision highp float;

in vec2 vUv;
out vec4 fragColor;

uniform vec4  uBackground;
uniform vec4  uAlive;
uniform vec4  uDead;
uniform float uCellSize;
uniform float uPadding;
uniform vec2  uResolution;
uniform float uGridWidth;
uniform float uRadius;
uniform sampler2D uCells;

float sdRoundBox(vec2 p, vec2 b, float r) {
    vec2 q = abs(p) - b + r;
    return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

float cellFade(float cx, float cy, float gridW, float gridH) {
    if (cx < 0.0 || cy < 0.0 || cx >= gridW || cy >= gridH) return 0.0;
    int idx = int(cy * gridW + cx);
    return texelFetch(uCells, ivec2(idx, 0), 0).r;
}

void main() {
    vec2  px    = vUv * uResolution;
    float gridW = uGridWidth;
    float gridH = floor(uResolution.y / uCellSize);

    vec2  cellF = px / uCellSize;
    float cx    = floor(cellF.x);
    float cy    = floor(cellF.y);

    float halfInner  = (uCellSize * 0.5) - uPadding;
    float glowRadius = uCellSize * 0.8;
    float glowSharp  = 4.0;
    float glow       = 0.0;

    for (int dy = -1; dy <= 1; dy++) {
        for (int dx = -1; dx <= 1; dx++) {
            float nx   = cx + float(dx);
            float ny   = cy + float(dy);
            float fade = cellFade(nx, ny, gridW, gridH);
            if (fade < 0.001) continue;

            vec2  centre  = (vec2(nx, ny) + 0.5) * uCellSize;
            vec2  localPx = px - centre;
            float d       = sdRoundBox(localPx, vec2(halfInner), uRadius);

            float glowD   = max(d, 0.0);
            float contrib = exp(-glowSharp * glowD / glowRadius);
            glow += contrib * fade;
        }
    }
    glow = clamp(glow, 0.0, 1.0);

    vec3  glowRgb = uAlive.rgb;
    float bgGlow  = glow * uAlive.a * 0.55;
    vec3  bgColor = mix(uBackground.rgb, glowRgb, bgGlow);

    float fade = cellFade(cx, cy, gridW, gridH);

    vec2  localPx = px - (vec2(cx, cy) + 0.5) * uCellSize;
    float d       = sdRoundBox(localPx, vec2(halfInner), uRadius);
    float aa      = fwidth(d);
    float mask    = 1.0 - smoothstep(-aa, aa, d);

    vec4 cellColor = mix(uDead, uAlive, fade);

    vec3 col = bgColor;

    vec3 cellRgb = mix(uDead.rgb, uAlive.rgb, fade);
    float cellAlpha = mix(uDead.a, uAlive.a, fade);

    col += cellRgb * cellAlpha * mask;

    float rimMask = (1.0 - mask) * glow * uAlive.a;
    col += glowRgb * rimMask * 1.2;
    col += cellRgb * cellAlpha * mask * 1.5;
    fragColor = vec4(col, 1.0);
}`;

	function compileShader(type: number, src: string): WebGLShader {
		const sh = gl!.createShader(type)!;
		gl!.shaderSource(sh, src);
		gl!.compileShader(sh);
		if (!gl!.getShaderParameter(sh, gl!.COMPILE_STATUS))
			throw new Error(gl!.getShaderInfoLog(sh) ?? 'shader error');
		return sh;
	}

	function buildProgram(): WebGLProgram {
		const vert = compileShader(gl!.VERTEX_SHADER, VERT_SRC);
		const frag = compileShader(gl!.FRAGMENT_SHADER, FRAG_SRC);
		const prog = gl!.createProgram()!;
		gl!.attachShader(prog, vert);
		gl!.attachShader(prog, frag);
		gl!.linkProgram(prog);
		if (!gl!.getProgramParameter(prog, gl!.LINK_STATUS))
			throw new Error(gl!.getProgramInfoLog(prog) ?? 'link error');
		gl!.deleteShader(vert);
		gl!.deleteShader(frag);
		return prog;
	}

	function uploadUniforms() {
		if (!gl || !program) return;
		gl.useProgram(program);
		const bg = parseRgba(colorBackground);
		const al = parseRgba(colorAlive);
		const de = parseRgba(colorDead);
		gl.uniform4fv(uBackground, bg);
		gl.uniform4fv(uAlive, al);
		gl.uniform4fv(uDead, de);
	}

	function resizeCanvas() {
		if (!canvas) return;
		const dpr = window.devicePixelRatio || 1;
		const w = Math.round(canvas.clientWidth * dpr);
		const h = Math.round(canvas.clientHeight * dpr);
		if (canvas.width !== w || canvas.height !== h) {
			canvas.width = w;
			canvas.height = h;
		}
	}

	onMount(async () => {
		if (!canvas) return;

		gl = canvas.getContext('webgl2', { alpha: true, premultipliedAlpha: false });
		if (!gl) {
			console.error('WebGL2 not supported');
			return;
		}

		wasm = await init();
		resizeCanvas();

		const dpr = window.devicePixelRatio || 1;
		const physCellSize = CELL_SIZE * dpr;
		const physPadding = PADDING * dpr;
		const physRadius = 6.0 * dpr;

		grid = new Grid(canvas.width, canvas.height, physCellSize);
		const gridWidth = grid.get_width();
		canvas.width = gridWidth * physCellSize;

		const cellCount = grid.get_cells_len();
		fadeValues = new Float32Array(cellCount);

		program = buildProgram();
		gl.useProgram(program);

		uBackground = gl.getUniformLocation(program, 'uBackground')!;
		uAlive = gl.getUniformLocation(program, 'uAlive')!;
		uDead = gl.getUniformLocation(program, 'uDead')!;
		uCellSize = gl.getUniformLocation(program, 'uCellSize')!;
		uPadding = gl.getUniformLocation(program, 'uPadding')!;
		uResolution = gl.getUniformLocation(program, 'uResolution')!;
		uGridWidth = gl.getUniformLocation(program, 'uGridWidth')!;
		uRadius = gl.getUniformLocation(program, 'uRadius')!;

		uploadUniforms();
		gl.uniform1f(uCellSize, physCellSize);
		gl.uniform1f(uPadding, physPadding);
		gl.uniform1f(uRadius, physRadius);
		gl.uniform2f(uResolution, canvas.width, canvas.height);
		gl.uniform1f(uGridWidth, gridWidth);

		gl.uniform1i(gl.getUniformLocation(program, 'uCells'), 0);

		cellTex = gl.createTexture()!;
		gl.activeTexture(gl.TEXTURE0);
		gl.bindTexture(gl.TEXTURE_2D, cellTex);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

		vao = gl.createVertexArray()!;
		gl.bindVertexArray(vao);

		gl.enable(gl.BLEND);
		gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

		rafId = requestAnimationFrame(render);
	});

	onDestroy(() => {
		if (rafId) cancelAnimationFrame(rafId);
		if (gl) {
			gl.deleteProgram(program);
			gl.deleteTexture(cellTex);
			gl.deleteVertexArray(vao);
		}
	});

	function render(now: number) {
		rafId = requestAnimationFrame(render);
		if (!gl || !grid || !fadeValues) return;

		const ptr = grid.get_cells_ptr();
		const len = grid.get_cells_len();
		const cells = new Uint8Array(wasm.memory.buffer, ptr, len);

		for (let i = 0; i < len; i++) {
			const target = cells[i] ? 1.0 : 0.0;
			fadeValues[i] += (target - fadeValues[i]) * FADE_SPEED;
		}

		gl.activeTexture(gl.TEXTURE0);
		gl.bindTexture(gl.TEXTURE_2D, cellTex);
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.R32F, len, 1, 0, gl.RED, gl.FLOAT, fadeValues);

		gl.viewport(0, 0, canvas!.width, canvas!.height);
		const bg = parseRgba(colorBackground);
		gl.clearColor(bg[0], bg[1], bg[2], bg[3]);
		gl.clear(gl.COLOR_BUFFER_BIT);
		gl.useProgram(program);
		gl.bindVertexArray(vao);
		gl.drawArrays(gl.TRIANGLES, 0, 6);

		if (now - lastTime >= FRAME_TIME) {
			lastTime = now;
			grid.update();
		}
	}

	function onCanvasMove(event: PointerEvent) {
		if ($showMainContent) return;
		event.preventDefault();
		if (event.pointerType === 'mouse' && !event.shiftKey) return;
		const rect = canvas!.getBoundingClientRect();
		const dpr = window.devicePixelRatio || 1;
		const mouseX = (event.clientX - rect.left) * dpr;
		const mouseY = (event.clientY - rect.top) * dpr;
		const gridWidth = grid.get_width();
		const gridHeight = grid.get_height();
		const x = Math.floor(mouseX / (canvas!.width / gridWidth));
		const y = Math.floor(mouseY / (canvas!.height / gridHeight));
		if (x >= 0 && x < gridWidth && y >= 0 && y < gridHeight) grid.update_cell_state(x, y, 1);
	}

	function loadPattern(pattern: number[][]) {
		const cellsView = new Uint8Array(
			wasm.memory.buffer,
			grid.get_cells_ptr(),
			grid.get_cells_len()
		);

		cellsView.fill(0);

		const gridWidth = grid.get_width();
		const gridHeight = grid.get_height();
		const centerX = Math.floor(gridWidth / 2);
		const centerY = Math.floor(gridHeight / 2);

		let minRow = Infinity,
			maxRow = -Infinity,
			minCol = Infinity,
			maxCol = -Infinity;

		for (const [row, col] of pattern) {
			minRow = Math.min(minRow, row);
			maxRow = Math.max(maxRow, row);
			minCol = Math.min(minCol, col);
			maxCol = Math.max(maxCol, col);
		}

		const patternWidth = maxCol - minCol + 1;
		const patternHeight = maxRow - minRow + 1;

		const offsetX = Math.floor(patternWidth / 2);
		const offsetY = Math.floor(patternHeight / 2);

		for (const [row, col] of pattern) {
			const targetX = centerX + (col - minCol) - offsetX;
			const targetY = centerY + (row - minRow) - offsetY;

			if (targetX >= 0 && targetX < gridWidth && targetY >= 0 && targetY < gridHeight) {
				const index = targetY * gridWidth + targetX;
				cellsView[index] = 1;
			}
		}

		grid.update();
	}

	function clearCanvas() {
		grid.clear();
		grid.update();
	}

	function randomize() {
		const dpr = window.devicePixelRatio || 1;
		const physCellSize = CELL_SIZE * dpr;
		grid = new Grid(canvas!.width, canvas!.height, physCellSize);
	}
</script>

<canvas
	class={`w-full h-svh block absolute top-0 left-0 ${$showMainContent ? 'touch-auto' : 'touch-none'}`}
	bind:this={canvas}
	on:pointermove={onCanvasMove}
/>

<LexiconCaroussel onPatternChange={loadPattern} />

<div
	class="absolute bottom-10 right-4 md:right-10 grid gap-2 grid-cols-1 md:grid-cols-2 grid-rows-3 md:grid-rows-2"
>
	{#if !$showMainContent}
		<ClearCanvasButton {clearCanvas} />
		<RandomizeCanvasButton {randomize} />
	{/if}
	<ToggleControlButton />
</div>
