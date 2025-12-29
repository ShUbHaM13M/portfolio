<script lang="ts">
	const RGB = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;

	export let label = '';
	export let color = '';
	export let showHash = false;
	export let highlightOnHover = true;

	let colorRGB = {
		r: 0,
		g: 0,
		b: 0
	};

	function getRgbaString(c: typeof colorRGB, alpha: number = 1): string {
		return `rgba(${c.r}, ${c.g}, ${c.b}, ${alpha})`;
	}

	$: {
		const result = RGB.exec(color);
		if (result) {
			colorRGB = {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16)
			};
		}
	}
</script>

<a
	title={label}
	style={`
		--hover-color: ${getRgbaString(colorRGB, 0.2)};
		--current-color: var(--hover-color);
	`}
	href={`/category/${label.toLowerCase()}`}
	class:highlightOnHover
	class="py-1 px-1.5 rounded-md border-2 text-primary dark:text-white transition-colors ease-out duration-300 flex gap-1"
>
	{#if showHash}
		<span class="pointer-events-none" style={`color: ${getRgbaString(colorRGB)}`}>#</span>
	{/if}
	<span class="min-w-10 inline-block">{label}</span>
</a>

<style scoped>
	a {
		--current-color: var(--hover-color);
		border-color: var(--current-color);
		background-color: var(--current-color);
	}
	a.highlightOnHover {
		--current-color: transparent;
	}
	a.highlightOnHover:hover,
	a.highlightOnHover:focus-visible {
		--current-color: var(--hover-color);
		--current-color: var(--hover-color);
	}
</style>
