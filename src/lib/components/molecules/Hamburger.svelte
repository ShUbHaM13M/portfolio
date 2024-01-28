<script lang="ts">
	export let links: {
		href: string;
		text: string;
	}[] = [];

	let input: HTMLInputElement;

	function handleOnLinkClick() {
		input.checked = false;
	}
</script>

<input
	bind:this={input}
	class="sm:hidden cursor-pointer absolute right-6 w-8 h-6 z-50 appearance-none"
	type="checkbox"
	id="menuToggle"
	aria-controls="menu"
	aria-label="Toggle the menu"
/>

<div class="lines flex flex-col gap-1.5 justify-center">
	<span class="sm:hidden block line bg-white w-8 h-1 rounded-full one" />
	<span class="sm:hidden block line bg-white w-8 h-1 rounded-full two" />
	<span class="sm:hidden block line bg-white w-8 h-1 rounded-full three" />
</div>

<!-- TODO: Staggered transition when animating the links -->
<div
	id="menu"
	class="absolute flex flex-col gap-4 px-4 py-6
	h-screen w-screen bg-primary inset-0 top-full translate-x-full transition-transform duration-300 ease-out z-40
	text-xl"
>
	{#each links as link}
		<a href={link.href} class="px-4 py-0.5 text-white" on:click={handleOnLinkClick}>
			{link.text}
		</a>
	{/each}
</div>

<style lang="postcss">
	@screen sm {
		#menu {
			@apply static px-6 py-0 h-auto w-full flex-row bg-transparent translate-x-0 justify-center transition-none text-base;
		}
		#menu a:last-child,
		a:first-child {
			@apply ml-auto;
		}
	}

	.line {
		transition:
			transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
			background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
			all 0.5s ease;
	}

	#menuToggle:checked {
		& ~ .lines {
			& .line.one {
				transform: rotate(45deg) translate(2px, -3px);
				transform-origin: top left;
			}

			& .line.two {
				opacity: 0;
				transform: rotate(0deg) scale(0.2, 0.2);
			}

			& .line.three {
				transform: rotate(-45deg) translate(3px, 3px);
				transform-origin: bottom left;
			}
		}
	}

	#menuToggle:checked ~ #menu {
		@apply translate-x-0;
	}

	:global(main:has(#menuToggle:checked)) {
		overflow: hidden;
	}
</style>
