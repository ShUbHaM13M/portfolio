<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	const showMainContent = getContext<Writable<boolean>>('showMainContent');

	function toggleContent() {
		showMainContent.update((v) => !v);
	}
</script>

<button
	on:click={toggleContent}
	class="outline-none focus:outline-none row-start-3 col-start-2 md:row-start-2 md:col-start-2
   hover:bg-accent-light hover:bg-opacity-10 focus-visible:bg-accent-light focus-visible:bg-opacity-10
   dark:hover:bg-accent dark:hover:bg-opacity-10 dark:focus-visible:bg-accent dark:focus-visible:bg-opacity-10
   rounded-full size-14 grid place-items-center transition-all ease-out duration-300 backdrop-blur-sm action-focus"
>
	<svg
		width="56"
		height="56"
		viewBox="0 0 56 56"
		fill="none"
		class="transition-transform ease-out duration-300"
	>
		<rect
			x="0.5"
			y="0.5"
			width="55"
			height="55"
			rx="27.5"
			class="stroke-accent-light dark:stroke-accent group-hover:stroke-2 group-focus-visible:stroke-2 transition-all ease-out duration-300"
			stroke-linejoin="round"
		/>
		<rect
			x="24"
			y="14"
			width="8"
			height="8"
			rx="2"
			class="origin-center fill-accent-light dark:fill-accent"
			style={`transform: ${$showMainContent ? 'translate(0, 0) scale(1)' : 'translate(-7px, 5px) scale(1.1)'}; transition: transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1);`}
		/>
		<rect
			x="34"
			y="34"
			width="8"
			height="8"
			rx="2"
			class="origin-center fill-accent-light dark:fill-accent"
			style={`transform: ${$showMainContent ? 'translate(0, 0) scale(1)' : 'translate(-4px, -3px) scale(1.1)'}; transition: transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1) 50ms;`}
		/>
		<rect
			x="24"
			y="34"
			width="8"
			height="8"
			rx="2"
			class="origin-center fill-accent-light dark:fill-accent"
			style={`transform: ${$showMainContent ? 'translate(0, 0) scale(1)' : 'translate(0, -10px) scale(1.1)'}; transition: transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1) 100ms;`}
		/>
		<rect
			x="14"
			y="34"
			width="8"
			height="8"
			rx="2"
			class="origin-center fill-accent-light dark:fill-accent"
			style={`transform: ${$showMainContent ? 'translate(0, 0) scale(1)' : 'translate(4px, -3px) scale(1.1)'}; transition: transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1) 150ms;`}
		/>
		<rect
			x="34"
			y="24"
			width="8"
			height="8"
			rx="2"
			class="origin-center fill-accent-light dark:fill-accent"
			style={`transform: ${$showMainContent ? 'translate(0, 0) scale(1)' : 'translate(-4px, -6px) scale(1.1)'}; transition: transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1) 200ms;`}
		/>
	</svg>
</button>
