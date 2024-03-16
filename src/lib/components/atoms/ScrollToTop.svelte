<script lang="ts">
	import { onMount } from 'svelte';

	let scrollButton: HTMLButtonElement;
	let prevScrollPos = 0;

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	function onScroll() {
		let currentScrollPos = window.scrollY || window.pageYOffset;

		if (currentScrollPos > window.innerHeight) {
			scrollButton?.classList.remove('hide');
		} else {
			scrollButton?.classList.add('hide');
		}

		prevScrollPos = currentScrollPos;
	}

	onMount(() => {
		if ((window.scrollY || window.pageYOffset) > window.innerHeight) {
			scrollButton.classList.remove('hide');
		}
		window.addEventListener('scroll', onScroll);
		() => {
			window.removeEventListener('scroll', onScroll);
		};
	});
</script>

<button
	bind:this={scrollButton}
	on:click={scrollToTop}
	class="fixed bottom-10 right-6 hide md:right-10 ring-1 ring-accent-light dark:ring-accent hover:ring-2 focus-visible:ring-2 hover:bg-accent-light hover:bg-opacity-10 focus-visible:bg-accent-light focus-visible:bg-opacity-10
	dark:focus-visible:bg-accent dark:focus-visible:bg-opacity-10 dark:hover:bg-accent dark:hover:bg-opacity-10
	rounded-full size-14 grid place-items-center transition ease-out duration-300"
>
	<svg
		width="19"
		height="17"
		viewBox="0 0 19 17"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		class="transition-transform ease-out duration-200"
	>
		<path
			d="M7.77412 0.987856C8.5469 -0.325868 10.452 -0.315848 11.2246 1.006L18.5561 13.5488C19.3378 14.8862 18.3763 16.5595 16.8308 16.5514L2.39343 16.4762C0.869732 16.4683 -0.0943189 14.8275 0.643763 13.4983L4.49951 6.55469L7.77412 0.987856Z"
			class="fill-accent-light dark:fill-accent"
		/>
	</svg>
</button>

<style lang="postcss" scoped>
	button:hover,
	button:focus-visible {
		& svg {
			transform: translateY(-5px) scale(1.1);
		}
	}
	button.hide {
		opacity: 0;
		transform: translateY(200%);
	}
</style>
