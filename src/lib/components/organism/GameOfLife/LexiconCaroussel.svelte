<script lang="ts">
	import { cubicOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	export let onPatternChange: (pattern: number[][]) => void;

	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	const showMainContent = getContext<Writable<boolean>>('showMainContent');

	const LWSS = [
		[0, 1],
		[0, 4],
		[1, 0],
		[2, 0],
		[2, 4],
		[3, 0],
		[3, 1],
		[3, 2],
		[3, 3]
	];

	const GOSPER_GUN = [
		[0, 24],
		[1, 22],
		[1, 24],
		[2, 12],
		[2, 13],
		[2, 20],
		[2, 21],
		[2, 34],
		[2, 35],
		[3, 11],
		[3, 15],
		[3, 20],
		[3, 21],
		[3, 34],
		[3, 35],
		[4, 0],
		[4, 1],
		[4, 10],
		[4, 16],
		[4, 20],
		[4, 21],
		[5, 0],
		[5, 1],
		[5, 10],
		[5, 14],
		[5, 16],
		[5, 17],
		[5, 22],
		[5, 24],
		[6, 10],
		[6, 16],
		[6, 24],
		[7, 11],
		[7, 15],
		[8, 12],
		[8, 13]
	];

	const ACORN = [
		[0, 1],
		[1, 3],
		[2, 0],
		[2, 1],
		[2, 4],
		[2, 5],
		[2, 6]
	];

	const PULSAR = [
		[2, 4],
		[2, 5],
		[2, 6],
		[2, 10],
		[2, 11],
		[2, 12],
		[4, 2],
		[5, 2],
		[6, 2],
		[4, 7],
		[5, 7],
		[6, 7],
		[4, 9],
		[5, 9],
		[6, 9],
		[4, 14],
		[5, 14],
		[6, 14],
		[7, 4],
		[7, 5],
		[7, 6],
		[7, 10],
		[7, 11],
		[7, 12],
		[9, 4],
		[9, 5],
		[9, 6],
		[9, 10],
		[9, 11],
		[9, 12],
		[10, 2],
		[11, 2],
		[12, 2],
		[10, 7],
		[11, 7],
		[12, 7],
		[10, 9],
		[11, 9],
		[12, 9],
		[10, 14],
		[11, 14],
		[12, 14],
		[14, 4],
		[14, 5],
		[14, 6],
		[14, 10],
		[14, 11],
		[14, 12]
	];

	const R_PENTOMINO = [
		[0, 1],
		[0, 2],
		[1, 0],
		[1, 1],
		[2, 1]
	];

	const MINI_GUN = [
		[0, 0],
		[0, 1],
		[1, 0],
		[1, 1],
		[2, 10],
		[2, 11],
		[3, 9],
		[3, 13],
		[4, 8],
		[4, 14],
		[5, 8],
		[5, 12],
		[5, 14],
		[5, 15],
		[6, 8],
		[6, 14],
		[7, 9],
		[7, 13],
		[8, 10],
		[8, 11]
	];

	const patterns = {
		LWSS,
		GOSPER_GUN,
		ACORN,
		PULSAR,
		R_PENTOMINO,
		MINI_GUN
	};

	function patternToSVG(pattern: number[][], cellSize = 4, padding = 2) {
		const xs = pattern.map(([x]) => x);
		const ys = pattern.map(([, y]) => y);

		const minX = Math.min(...xs);
		const minY = Math.min(...ys);
		const maxX = Math.max(...xs);
		const maxY = Math.max(...ys);

		const width = (maxY - minY + 1) * cellSize + padding * 2;
		const height = (maxX - minX + 1) * cellSize + padding * 2;

		const rects = pattern
			.map(([x, y]) => {
				const rx = (y - minY) * cellSize + padding;
				const ry = (x - minX) * cellSize + padding;
				return `<rect x="${rx}" y="${ry}" width="${cellSize - 1}" height="${cellSize - 1}" rx="1" class="fill-accent-light dark:fill-accent" />`;
			})
			.join('');

		return `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
		${rects}
</svg>`;
	}
</script>

<div
	class="w-full flex flex-row gap-2 md:gap-4 absolute bottom-0 left-0 p-2 md:p-4 overflow-x-auto no-scrollbar"
>
	{#each Object.entries(patterns) as [name, pattern], index (name)}
		{#if !$showMainContent}
			<div
				transition:fly={{ y: '100%', easing: cubicOut, duration: 400, delay: index * 50 }}
				class="block shrink-0"
			>
				<button
					class={`p-2 rounded-xl grid place-items-center
					bg-accent-light dark:bg-accent bg-opacity-40 dark:bg-opacity-10
			hover:bg-accent-light hover:bg-opacity-20 focus-visible:bg-accent-light focus-visible:bg-opacity-20 dark:hover:bg-accent dark:hover:bg-opacity-20
			dark:focus-visible:bg-accent dark:focus-visible:bg-opacity-20
			transition-all ease-out duration-300 backdrop-blur-sm action
			border border-1 border-accent-light dark:border-accent border-opacity-50 dark:border-opacity-50
			h-full min-w-20`}
					on:click={() => onPatternChange(pattern)}
				>
					{@html patternToSVG(pattern, 6, 0)}
				</button>
			</div>
		{/if}
	{/each}
</div>
