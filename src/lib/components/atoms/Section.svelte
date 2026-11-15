<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		additionalClass?: string;
		title?: string;
		description?: string;
		descriptionContent?: Snippet;
		children?: Snippet;
		[key: string]: any;
	}

	let {
		additionalClass = '',
		title = '',
		description = '',
		descriptionContent,
		children,
		...rest
	}: Props = $props();
</script>

<section {...rest} class={`px-6 md:pl-20 pt-10 min-h-screen ${additionalClass}`}>
	{#if title}
		<h1 class="font-short-stack mt-2 text-primary dark:text-white text-4xl sm:text-6xl">{title}</h1>
	{/if}
	{#if descriptionContent}
		{@render descriptionContent()}
	{:else if description}
		<h2 class="leading-6 sm:leading-10 text-subtitle text-lg md:text-2xl">
			{description}
		</h2>
	{/if}
	{@render children?.()}
</section>
