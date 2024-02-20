<script lang="ts">
	const RGB = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;

	export let label = '';
	export let color = '';
	export let text = '#F8EDFF';

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
		color: ${text};
	`}
	href={`/blog/${label}`}
	class="py-1 px-1.5 rounded-md border-2 border-transparent transition-colors ease-out duration-300"
>
	<span style={`color: ${getRgbaString(colorRGB)}`}>#</span>
	{label}
</a>

<style lang="postcss" scoped>
	a:hover,
	a:focus-visible {
		border-color: var(--hover-color);
		background-color: var(--hover-color);
	}
</style>
