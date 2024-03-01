<script lang="ts">
	import { page } from '$app/stores';
	import NavLink from '$lib/components/atoms/NavLink.svelte';
	import { onDestroy } from 'svelte';
	import ThemeToggle from './ThemeToggle.svelte';

	export let links: {
		href: string;
		text: string;
	}[] = [];

	let input: HTMLInputElement;

	function getActiveSectionIndex() {
		return links.findIndex(({ href }) => {
			return $page.url.href.includes(href) || $page.url.hash.includes(href.replace('/', ''));
		});
	}

	let activeSectionIndex = getActiveSectionIndex();
	const unsubscribe = page.subscribe((_) => {
		activeSectionIndex = getActiveSectionIndex();
	});

	onDestroy(() => {
		unsubscribe();
	});

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
	<span class="sm:hidden block line bg-primary dark:bg-zinc-50 w-8 h-1 rounded-full one" />
	<span class="sm:hidden block line bg-primary dark:bg-zinc-50 w-8 h-1 rounded-full two" />
	<span class="sm:hidden block line bg-primary dark:bg-zinc-50 w-8 h-1 rounded-full three" />
</div>

<!-- TODO: Staggered transition when animating the links -->
<div
	id="menu"
	class="absolute flex flex-col gap-4 px-4 py-6
	h-screen w-screen bg-zinc-50 dark:bg-primary inset-0 top-full translate-x-full transition-transform duration-300 ease-out z-40
	text-xl"
>
	{#each links as link, index}
		{#if index < links.length - 1}
			<NavLink
				active={index === activeSectionIndex}
				href={link.href}
				text={link.text}
				on:click={handleOnLinkClick}
			/>
		{:else}
			<div>
				<NavLink
					active={index === activeSectionIndex}
					href={link.href}
					text={link.text}
					on:click={handleOnLinkClick}
				/>
			</div>
		{/if}
	{/each}

	<ThemeToggle extraClasses="pl-4 sm:pl-0" />

	<div
		class:hidden={activeSectionIndex < 0}
		style={`--offset: ${activeSectionIndex}`}
		class="indicator absolute left-8 top-6 h-8 w-1 rounded-full bg-accent-light dark:bg-accent transition-transform ease-out duration-200"
	></div>
</div>

<style lang="postcss">
	@screen sm {
		#menu {
			@apply static pl-10 py-0 h-auto w-full flex-row bg-transparent translate-x-0 justify-center transition-none text-lg;
		}
		.indicator {
			@apply hidden;
		}
		:global(#menu > .navlink:nth-last-child(3)) {
			@apply ml-auto;
		}
	}
	.indicator {
		transform: translateY(calc(150% * var(--offset)));
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

	:global(body:has(#menuToggle:checked)) {
		overflow: hidden;
	}
</style>
