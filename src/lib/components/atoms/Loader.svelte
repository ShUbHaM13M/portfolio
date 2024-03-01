<script>
	import { expoOut, circInOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { tweened } from 'svelte/motion';

	let scale = tweened(1, { easing: circInOut });

	const animateScale = () => {
		scale.set(1);

		const scaleValues = [1, 2, 1];

		const animate = () => {
			scaleValues.forEach((value, index) => {
				const duration = 300;
				const delay = index * duration;

				setTimeout(() => {
					scale.set(value, { duration });
				}, delay);
			});

			// Repeat the animation
			setTimeout(animate, scaleValues.length * 500);
		};

		animate();
	};

	onMount(animateScale);
</script>

<div
	transition:fade={{ easing: expoOut }}
	class="loader fixed inset-0 bg-primary bg-opacity-40 dark:bg-opacity-40 w-screen h-screen grid place-items-center"
>
	<svg
		style="transform: scale({$scale})"
		xmlns="http://www.w3.org/2000/svg"
		class="size-14"
		viewBox="0 0 22 28"
		fill="none"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M1.84408 6.62304C-0.802075 8.32145 -0.552762 12.2639 2.28561 13.6051L4.91277 14.8465L7.1513 15.9561L6.94646 25.0196C6.91058 26.6072 8.65033 27.5922 10.0001 26.7486L19.9091 20.5552C22.5794 18.8862 22.3867 14.9417 19.5679 13.5692L16.9583 12.2987L14.6661 11.1289L14.7411 2.01598C14.7542 0.428128 13.0006 -0.537646 11.6631 0.32081L1.84408 6.62304Z"
			fill="#19D645"
			class="fill-accent"
		/>
	</svg>
</div>

<style>
	:global(body:has(.loader)) {
		overflow: hidden;
	}
</style>
