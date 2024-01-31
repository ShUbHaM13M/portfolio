<script lang="ts">
	import Logo from '$lib/components/atoms/Logo.svelte';
	import Hamburger from '$lib/components/molecules/Hamburger.svelte';
	import { onMount } from 'svelte';

	const links = [
		{ href: '#expertise', text: 'Expertise' },
		{ href: '#project', text: 'Project' },
		{ href: '#work', text: 'Work' },
		{ href: '#blog', text: 'Blog' },
		{ href: '#contact', text: 'Contact' }
	];

	let prevScrollPos = 0;
	let navbar: HTMLElement;

	function onLogoClick() {
		const menuToggle = document.querySelector('#menuToggle') as HTMLInputElement;
		menuToggle.checked = false;
	}

	function handleOnWindowScroll(e: Event) {
		let currentScrollPos = window.scrollY || window.pageYOffset;
		if (currentScrollPos > prevScrollPos && currentScrollPos > navbar.offsetHeight * 0.5) {
			navbar.style.top = -navbar.offsetHeight * 2 + 'px';
		} else {
			navbar.style.top = 0 + 'px';
		}
		prevScrollPos = currentScrollPos;
	}

	onMount(() => {
		prevScrollPos = window.scrollY || window.pageYOffset;
		if (!navbar) navbar = document.querySelector('#navbar') as HTMLElement;
		window.addEventListener('scroll', handleOnWindowScroll);
	});
</script>

<header
	bind:this={navbar}
	class="fixed w-full max-w-full lg:max-w-[94%] lg:rounded-2xl p-6 py-6 lg:px-7 lg:py-4 flex items-center backdrop-blur-xl lg:mt-6 lg:left-2/4 lg:-translate-x-2/4 transition-all ease-out duration-300 z-50 bg-header"
>
	<nav class="flex w-full justify-between">
		<a href="/" aria-label="Site logo" on:click={onLogoClick}>
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
		@apply bg-primary;
	}
	:global(header.hide) {
		@apply -translate-y-full;
	}
</style>
