<script lang="ts">
	import { onMount } from 'svelte';
	import IconPlay from '$lib/icons/IconPlay.svelte';
	import { scale } from 'svelte/transition';
	// TODO: Try to set the size of cursor when hovering over Icons so it would look like its like a shadow of the icon

	type InteractiveElementType = 'link' | 'text' | 'action' | 'video' | 'action-copy' | 'canvas';
	const INTERACTABLE_ELEMENTS = 'button, a, p, h1, h2, h3, h4, h5, h6, input, span, video, canvas';

	let interactingElementType: InteractiveElementType | null = null;
	export let size: number = 50;
	let cursor: HTMLDivElement;

	function setInteractiveElementType(element: HTMLElement) {
		const tag = element.tagName.toLowerCase();
		switch (tag) {
			case 'button':
				if (element.classList.contains('copy-button')) {
					interactingElementType = 'action-copy';
					break;
				}
			case 'input':
				interactingElementType = 'action';
				break;
			case 'a':
				interactingElementType = 'link';
				break;
			case 'p':
			case 'h1':
			case 'h2':
			case 'h3':
			case 'h4':
			case 'h5':
			case 'h6':
			case 'span':
				interactingElementType = 'text';
				break;
			case 'video':
				interactingElementType = 'video';
				break;
			case 'canvas':
				interactingElementType = 'canvas';
				break;
			default:
				interactingElementType = null;
		}
	}

	function onMouseMove(e: MouseEvent) {
		const closest: HTMLElement | null = (e.target as HTMLElement).closest(INTERACTABLE_ELEMENTS);
		if (closest) {
			setInteractiveElementType(closest);
		} else {
			interactingElementType = null;
		}

		const keyframes = {
			transform: `
				translate(${e.clientX - size / 2}px, ${e.clientY - size / 2}px)
				scale(${interactingElementType === 'action' || interactingElementType === 'link' ? 1.2 : 1})
			`
		};
		cursor?.animate(keyframes, { duration: 300, fill: 'forwards' });

		if (interactingElementType === 'canvas' && e.shiftKey) cursor.classList.add('canvas');
		else cursor.classList.remove('canvas');
	}

	function onMouseDown(e: PointerEvent) {
		const keyframes = {
			transform: `
				translate(${e.clientX - size / 2}px, ${e.clientY - size / 2}px) scale(0.84)
			`
		};
		cursor?.animate(keyframes, { duration: 150, fill: 'forwards' });
	}

	function onMouseUp(e: PointerEvent) {
		const keyframes = {
			transform: `
				translate(${e.clientX - size / 2}px, ${e.clientY - size / 2}px) scale(1)
			`
		};
		cursor?.animate(keyframes, { duration: 150, fill: 'forwards' });
	}

	onMount(() => {
		document.body.classList.add('custom-cursor');
		if (!cursor) cursor = document.querySelector('#cursor') as HTMLDivElement;
		window.addEventListener('mousemove', onMouseMove);
		window.addEventListener('pointerdown', onMouseDown);
		window.addEventListener('pointerup', onMouseUp);
	});
</script>

<div
	id="cursor"
	bind:this={cursor}
	class={`fixed inset-0 border-2 border-accent-light border-opacity-30 dark:border-accent dark:border-opacity-30 z-50 opacity-0 pointer-events-none grid place-items-center ${interactingElementType} transition-all ease-in-out duration-300`}
	style={`--size: ${size}px`}
>
	{#if interactingElementType === 'video'}
		<div transition:scale={{ duration: 350 }}>
			<IconPlay />
		</div>
	{:else}
		<div
			class={`absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-1/6 h-1/6 rounded-full bg-opacity-80 bg-accent-light dark:bg-accent transition-all ease-out duration-300 ${interactingElementType}`}
			transition:scale={{ duration: 350 }}
		></div>
		<div
			style="height: 6%"
			class={`w-1/2 rounded-full bg-primary dark:bg-white transition-all ease-out duration-300 bg-opacity-0 dark:bg-opacity-0 ${
				interactingElementType === 'link' ? 'bg-opacity-80 dark:bg-opacity-80' : ''
			}`}
		></div>
	{/if}
</div>

<style lang="postcss">
	#cursor.text {
		@apply border-primary border-opacity-30 dark:border-white dark:border-opacity-30;
	}
	#cursor.link {
		@apply border-primary border-opacity-30 dark:border-white dark:border-opacity-30;
	}
	#cursor .text {
		@apply h-2/4 bg-primary bg-opacity-60 dark:bg-white dark:bg-opacity-60;
	}
	#cursor .link {
		width: 6%;
		@apply h-2/4 bg-primary dark:bg-white;
	}
	#cursor .action {
		@apply h-1/4 w-1/4;
	}
	#cursor .action-copy {
		@apply bg-transparent;
	}
	#cursor.action-copy {
		@apply border-4;
	}
	#cursor.canvas {
		@apply ring-2 dark:ring-accent ring-accent-light;
	}
</style>
