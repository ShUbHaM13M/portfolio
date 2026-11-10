<script lang="ts">
	interface Props {
		title?: string;
		containerClasses?: string;
		children?: import('svelte').Snippet;
	}

	let { title = '', containerClasses = '', children }: Props = $props();
</script>

<div class={`flex flex-1 flex-col gap-5 ${containerClasses}`}>
	<h3
		class="font-semibold text-3xl relative w-full
        after:absolute after:h-0.5 after:w-full after:bg-accent-light dark:after:bg-accent
        after:bottom-0 after:left-0 after:rounded-full"
	>
		{title}
	</h3>
	{@render children?.()}
</div>
