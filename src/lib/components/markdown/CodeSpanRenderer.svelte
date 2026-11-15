<script lang="ts">
	interface Props {
		raw: string;
	}

	let { raw }: Props = $props();
</script>

<code
	class="text-sm md:text-base bg-secondary dark:bg-primary/40 font-semibold font-mono text-primary dark:text-white p-1 rounded-sm"
>{raw.replaceAll('`', '')}</code>
