<script lang="ts">
	export let label = '';
	export let color = '';
</script>

<a
	title={label}
	style={`--color: ${color}`}
	href={`/blog/${label}`}
	class="py-1 px-1.5 text-white rounded-md border border-transparent"
>
	<span style={`color: ${color}`}>#</span>
	{label}
</a>

<style lang="postcss" scoped>
	a:hover,
	a:focus-visible {
		border-color: var(--color);
		background-color: var(--color);
	}
</style>
