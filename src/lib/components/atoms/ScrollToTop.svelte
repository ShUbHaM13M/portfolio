<script lang="ts">
	import { onMount } from 'svelte';

	const MAX_STROKE_DASHOFFSET = 170;

	let scrollButton: HTMLButtonElement;
	let strokeDashOffset = MAX_STROKE_DASHOFFSET;

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	function onScroll() {
		let currentScrollPos = window.scrollY || window.pageYOffset;
		let totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

		strokeDashOffset =
			MAX_STROKE_DASHOFFSET - (currentScrollPos / totalHeight) * MAX_STROKE_DASHOFFSET;

		if (currentScrollPos > window.innerHeight) scrollButton?.classList.remove('hide');
		else scrollButton?.classList.add('hide');
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
	class="fixed group bottom-10 hide right-6 md:right-10 outline-none focus:outline-none
	hover:bg-accent-light hover:bg-opacity-10 focus-visible:bg-accent-light focus-visible:bg-opacity-10
	dark:hover:bg-accent dark:hover:bg-opacity-10 dark:focus-visible:bg-accent dark:focus-visible:bg-opacity-10
	rounded-full size-14 grid place-items-center transition-all ease-out duration-300 backdrop-blur-sm"
>
	<svg
		width="56"
		height="56"
		viewBox="0 0 56 56"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		class="transition-transform ease-out duration-300"
	>
		<rect
			x="1"
			y="1"
			width="54"
			height="54"
			rx="27.5"
			class="stroke stroke-grey opacity-30 dark:stroke-white
				group-hover:stroke-2 group-focus-visible:stroke-2
				transition-all ease-out duration-300"
			stroke-linejoin="round"
		/>
		<rect
			x="1"
			y="1"
			width="54"
			height="54"
			rx="27.5"
			stroke-width="1.5"
			class="stroke-accent-light dark:stroke-accent
			group-hover:stroke-2 group-focus-visible:stroke-2
			transition-all ease-out duration-300"
			stroke-linejoin="round"
			stroke-dasharray={MAX_STROKE_DASHOFFSET}
			stroke-dashoffset={strokeDashOffset}
		/>
		<path
			transform="translate(18, 19)"
			d="M7.77412 0.987856C8.5469 -0.325868 10.452 -0.315848 11.2246 1.006L18.5561 13.5488C19.3378 14.8862 18.3763 16.5595 16.8308 16.5514L2.39343 16.4762C0.869732 16.4683 -0.0943189 14.8275 0.643763 13.4983L4.49951 6.55469L7.77412 0.987856Z"
			class="fill-accent-light dark:fill-accent"
		/>
	</svg>
</button>

<style lang="postcss" scoped>
	button:hover,
	button:focus-visible {
		transform: translateY(-5px) scale(1.1);
	}
	button.hide {
		opacity: 0;
		transform: translateY(200%);
	}
</style>
