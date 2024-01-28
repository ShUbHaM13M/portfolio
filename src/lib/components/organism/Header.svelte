<script lang="ts">
	import Logo from '$lib/components/atoms/Logo.svelte';
	import Hamburger from '$lib/components/molecules/Hamburger.svelte';

	const links = [
		{ href: '/', text: 'Home' },
		{ href: '#expertise', text: 'Expertise' },
		{ href: '#work', text: 'Work' },
		{ href: '#blog', text: 'Blog' },
		{ href: '#contact', text: 'Contact' }
	];
</script>

<header
	class="absolute w-full max-w-full lg:max-w-[94%] lg:rounded-2xl p-6 py-6 lg:px-7 lg:py-4 flex items-center backdrop-blur-xl lg:mt-6 lg:left-2/4 lg:-translate-x-2/4 transition-colors ease-out duration-300"
>
	<nav class="flex w-full justify-between">
		<a href="/" aria-label="Site logo">
			<Logo />
		</a>

		<Hamburger {links} />
	</nav>
</header>

<style lang="postcss">
	header {
		view-transition-name: header;
		background-color: rgba(237, 237, 237, 0.18);
	}
	header:has(#menuToggle:checked) {
		@apply bg-primary;
	}
</style>
