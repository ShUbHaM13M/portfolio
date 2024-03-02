<script lang="ts">
	export let size: number = 20;
	export let checked: boolean = false;
	export let classes: string = '';
</script>

<svg
	width={size || 20}
	height={size || 20}
	viewBox="0 0 20 20"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	class={classes}
>
	<rect
		x="0.75"
		y="0.75"
		width="18.5"
		height="18.5"
		rx="4.25"
		class={`${
			checked
				? 'stroke-accent-light dark:stroke-accent fill-accent-light dark:fill-accent'
				: 'stroke-primary dark:stroke-white fill-transparent'
		}`}
		stroke-width="1.5"
	/>
	<path
		d="M6 10L8.68961 12.3054C9.12838 12.6815 9.79367 12.6084 10.1404 12.1461L14 7"
		class={`${checked ? 'stroke-white' : 'stroke-primary dark:stroke-white'}`}
		stroke-width="2"
		stroke-linecap="round"
	/>
</svg>
