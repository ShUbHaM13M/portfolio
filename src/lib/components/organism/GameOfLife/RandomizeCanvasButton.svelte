<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { expoOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	export let randomize: () => void;
	let isMobile = false;

	if (browser) {
		isMobile = window.matchMedia('(max-width: 768px)').matches;
	}

	onMount(() => {
		const media = window.matchMedia('(max-width: 768px)');
		const update = () => (isMobile = media.matches);
		update();

		media.addEventListener('change', update);

		return () => media.removeEventListener('change', update);
	});
</script>

<button
	in:fly={{
		...(isMobile ? { y: '100%' } : { x: '100%' }),
		easing: expoOut,
		duration: 500
	}}
	out:fly={{
		...(isMobile ? { y: '100%' } : { x: '100%' }),
		easing: expoOut,
		duration: 500,
		opacity: 0
	}}
	on:click={randomize}
	class="outline-none focus:outline-none border-accent border col-start-2 md:col-start-1 row-start-1 md:row-start-2
			hover:bg-accent-light hover:bg-opacity-10 focus-visible:bg-accent-light focus-visible:bg-opacity-10
	dark:hover:bg-accent dark:hover:bg-opacity-10 dark:focus-visible:bg-accent dark:focus-visible:bg-opacity-10
	rounded-full size-14 grid place-items-center transition-all ease-out duration-300 backdrop-blur-sm action-focus"
>
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
		<path
			d="M19.558 4L20.455 4.976C20.856 5.412 21.057 5.63 20.986 5.815C20.915 6 20.632 6 20.065 6C18.795 6 17.277 5.795 16.111 6.473C15.391 6.893 14.888 7.625 14.039 9M3 18H4.58C6.509 18 7.473 18 8.286 17.527C9.007 17.107 9.509 16.375 10.358 15M19.558 20L20.455 19.024C20.856 18.588 21.057 18.37 20.986 18.185C20.915 18 20.632 18 20.065 18C18.795 18 17.277 18.205 16.111 17.527C15.298 17.053 14.763 16.181 13.693 14.437L10.703 9.562C9.635 7.82 9.1 6.947 8.287 6.473C7.474 5.999 6.51 6 4.581 6H3"
			class="stroke-accent-light dark:stroke-accent"
			stroke-width="2.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
</button>
