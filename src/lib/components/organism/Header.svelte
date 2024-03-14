<script lang="ts">
	import Logo from '$lib/components/atoms/Logo.svelte';
	import Hamburger from '$lib/components/molecules/Hamburger.svelte';
	import { swatch } from '$lib/stores/swatch';
	import { isColorDark, rgbToRgba } from '$lib/utils/color';
	import type { Palette } from '$lib/utils/types';
	import { onMount } from 'svelte';

	const links = [
		{ href: '/#expertise', text: 'Expertise' },
		{ href: '/#project', text: 'Project' },
		{ href: '/blog', text: 'Blog' },
		{ href: '/#work', text: 'Work' },
		{ href: '/#contact', text: 'Contact' }
	];

	let prevScrollPos = 0;
	let navbar: HTMLElement;

	function onLogoClick() {
		const menuToggle = document.querySelector('#menuToggle') as HTMLInputElement;
		menuToggle.checked = false;
	}

	function handleOnWindowScroll(e: Event) {
		if (!navbar) return;
		let currentScrollPos = window.scrollY || window.pageYOffset;
		if (currentScrollPos > prevScrollPos && currentScrollPos > navbar.offsetHeight * 0.5) {
			navbar.style.top = -navbar.offsetHeight * 2 + 'px';
		} else {
			navbar.style.top = 0 + 'px';
		}
		prevScrollPos = currentScrollPos;
	}

	function updateAccentColors(swatch: Palette) {
		const bgColorArray = swatch.lightVibrant;
		const bgDarkColorArray = swatch.darkVibrant;
		const bgColorString = rgbToRgba(bgColorArray, 0.3);
		const bgDarkColorString = rgbToRgba(bgDarkColorArray, 0.2);
		bgColorArray.push(0.3);
		bgDarkColorArray.push(0.2);
		navbar.style.setProperty('--color-bg', bgColorString);
		navbar.style.setProperty('--color-text', rgbToRgba(swatch.darkVibrant));
		navbar.style.setProperty('--color-bg-dark', bgDarkColorString);
		navbar.style.setProperty('--color-text-dark', rgbToRgba(swatch.lightVibrant));
	}

	onMount(() => {
		prevScrollPos = window.scrollY || window.pageYOffset;
		if (!navbar) navbar = document.querySelector('#navbar') as HTMLElement;
		window.addEventListener('scroll', handleOnWindowScroll);
		const unsubscribe = swatch.subscribe((value) => {
			if (!value) return;
			updateAccentColors(value);
		});
		return () => {
			unsubscribe();
		};
	});
</script>

<header
	bind:this={navbar}
	class:has-custom-colours={!!$swatch}
	class="fixed w-full max-w-full lg:max-w-[94%] lg:rounded-2xl p-6 py-6 lg:px-7 lg:py-4 flex items-center backdrop-blur-xl lg:mt-6 lg:left-2/4 lg:-translate-x-2/4 transition-all ease-out duration-300 z-50 dark:bg-slate-200 dark:bg-opacity-10 bg-opacity-10 bg-primary text-primary dark:text-white"
>
	<nav class="flex w-full justify-between">
		<a
			href="/"
			aria-label="Site logo"
			on:click={onLogoClick}
			class="grid place-items-center hover:rotate-180 focus-visible:rotate-180 transition-transform ease-out duration-300 focus-visible:outline-none"
		>
			<Logo />
		</a>

		<Hamburger {links} />
	</nav>
</header>

<style lang="postcss">
	header {
		view-transition-name: header;
	}
	header:has(#menuToggle:checked) {
		@apply bg-zinc-50 dark:bg-primary;
	}
	:global(header.hide) {
		@apply -translate-y-full;
	}
	header.has-custom-colours {
		background-color: var(--color-bg);
		color: var(--color-text);
	}
	:global(html[data-theme='dark'] header.has-custom-colours) {
		background-color: var(--color-bg-dark);
		color: var(--color-text-dark);
	}
	@media (prefers-color-scheme: dark) {
		header.has-custom-colours {
			background-color: var(--color-bg-dark);
			color: var(--color-text-dark);
		}
	}
</style>
