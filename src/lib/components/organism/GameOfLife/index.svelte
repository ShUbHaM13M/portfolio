<script lang="ts">
	import { onMount } from 'svelte';
	import init, { Grid, type InitOutput } from './game_of_life.js';
	import { theme } from '$lib/stores/theme';

	let colorBackground = 'rgba(10, 12, 12, 0.35)';
	let colorAlive = 'rgba(80, 200, 140, 0.25)';
	let colorDead = 'rgba(255,255,255,0.04)';
	theme.subscribe((current) => {
		if (current === 'light') {
			colorBackground = 'rgba(248, 250, 252, 0.95)';
			colorAlive = 'rgba(0, 102, 204, 0.12)';
			colorDead = 'rgba(20, 40, 80, 0.035)';
			return;
		}
		colorBackground = 'rgba(10, 12, 12, 0.35)';
		colorAlive = 'rgba(80, 200, 140, 0.25)';
		colorDead = 'rgba(255,255,255,0.04)';
	});

	const STRIDE = 2;
	const CELL_SIZE = 20;
	// const PADDING =  1;
	const PADDING = CELL_SIZE * 0.15;

	const TARGET_FPS = 8;
	const FRAME_TIME = 1000 / TARGET_FPS;
	let lastTime = 0;

	let wasm: InitOutput;
	let grid: Grid;

	let canvas: HTMLCanvasElement | null = null;
	let context: CanvasRenderingContext2D | null = null;

	function resizeCanvas() {
		const displayWidth = canvas!.clientWidth;
		const displayHeight = canvas!.clientHeight;

		if (canvas!.width !== displayWidth || canvas!.height !== displayHeight) {
			canvas!.width = displayWidth;
			canvas!.height = displayHeight;
		}
	}

	onMount(async () => {
		if (canvas === null) return;
		context = canvas.getContext('2d');
		if (context === null) return;
		wasm = await init();
		resizeCanvas();

		grid = new Grid(canvas.width, canvas.height, CELL_SIZE);
		const gridWidth = grid.get_width();
		canvas.width = gridWidth * CELL_SIZE;
		requestAnimationFrame(render);
	});

	function render(now: number) {
		if (now - lastTime < FRAME_TIME) {
			requestAnimationFrame(render);
			return;
		}

		lastTime = now;

		context!.fillStyle = colorBackground;
		context!.fillRect(0, 0, canvas!.width, canvas!.height);
		if ($theme === 'light') {
			context!.fillStyle = 'rgba(248, 250, 252, 0.25)';
			context!.fillRect(0, 0, canvas!.width, canvas!.height);
		}
		renderCells();
		grid.update();

		requestAnimationFrame(render);
	}

	function renderCells() {
		const ptr = grid.get_cells_ptr();
		const len = grid.get_cells_len();
		const gridWidth = grid.get_width();

		const cells = new Uint32Array(wasm.memory.buffer, ptr, len * STRIDE);

		for (let i = 0; i < cells.length; i += STRIDE) {
			const cellIndex = i / STRIDE;
			const x = Math.floor(cellIndex % gridWidth);
			const y = Math.floor(cellIndex / gridWidth);
			const state = cells[i];
			const size = cells[i + 1];

			context!.fillStyle = state ? colorAlive : colorDead;
			context!.beginPath();
			context!.roundRect(
				x * size + PADDING,
				y * size + PADDING,
				size - PADDING * 2,
				size - PADDING * 2,
				3
			);
			context!.fill();
		}
	}
	function onCanvasMove(event: MouseEvent) {
		if (!event.shiftKey) return;

		const rect = canvas!.getBoundingClientRect();

		const mouseX = event.clientX - rect.left;
		const mouseY = event.clientY - rect.top;

		const gridWidth = grid.get_width();
		const gridHeight = grid.get_height();

		const x = Math.floor(mouseX / (rect.width / gridWidth));
		const y = Math.floor(mouseY / (rect.height / gridHeight));
		if (x >= 0 && x < gridWidth && y >= 0 && y < gridHeight) grid.update_cell_state(x, y, 1);
	}
</script>

<canvas
	class="w-full h-full block absolute top-0 left-0"
	bind:this={canvas}
	on:mousemove={onCanvasMove}
/>
