<script lang="ts">
	import { onMount } from 'svelte';
	// TODO: Try to set the size of cursor when hovering over Icons so it would look like its like a shadow of the icon

	type InteractiveElementType = 'link' | 'text' | 'action';
	const INTERACTABLE_ELEMENTS = 'button, a, p, h1, h2, h3, h4, h5, h6, input, span';

	let interactingElementType: InteractiveElementType | null = null;
	export let size: number = 50;
	let cursor: HTMLDivElement;

	function setInteractiveElementType(element: string) {
		switch (element) {
			case 'button':
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
			default:
				interactingElementType = null;
		}
	}

	function onMouseMove(e: MouseEvent) {
		const closest = (e.target as HTMLElement).closest(INTERACTABLE_ELEMENTS);
		if (closest) {
			const element = closest.tagName.toLowerCase();
			setInteractiveElementType(element);
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
	}

	onMount(() => {
		if (!cursor) cursor = document.querySelector('#cursor') as HTMLDivElement;
		window.addEventListener('mousemove', onMouseMove);
	});
</script>

<div
	id="cursor"
	bind:this={cursor}
	class={`fixed inset-0 border-2 border-accent border-opacity-30 z-50 opacity-0 transition-opacity pointer-events-none grid place-items-center ${interactingElementType} transition-all ease-out duration-300`}
	style={`--size: ${size}px`}
>
	<!-- TODO: Better indicator using svg elements -->
	<div
		class={`absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-1/6 h-1/6 rounded-full bg-opacity-80 bg-accent transition-all ease-out duration-300 ${interactingElementType}`}
	></div>
	<div
		style="height: 6%"
		class={`w-1/2 rounded-full bg-white transition-all ease-out duration-300 bg-opacity-0 ${
			interactingElementType === 'link' ? 'bg-opacity-80' : ''
		}`}
	></div>
</div>

<style lang="postcss">
	#cursor {
		width: var(--size, 20);
		height: var(--size, 20);
		border-radius: calc(var(--size, 20) / 2);
		display: none;
	}
	:global(body:hover #cursor) {
		opacity: 1;
	}

	@media (pointer: fine) {
		#cursor {
			display: grid;
		}
		:global(*) {
			cursor: none;
		}
	}

	#cursor.text {
		@apply border-white border-opacity-30;
	}
	#cursor.link {
		@apply border-white border-opacity-30;
	}
	#cursor .text {
		@apply h-2/4 bg-white bg-opacity-60;
	}
	#cursor .link {
		width: 6%;
		@apply h-2/4 bg-white;
	}
	#cursor .action {
		@apply h-2/4 bg-blue-400 rotate-45;
	}
</style>
