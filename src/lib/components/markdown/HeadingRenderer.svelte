<script lang="ts">
	// import { page } from '$app/state';
	import { marked } from 'marked';

	interface Props {
		text: string;
		depth: string;
		raw: string;
	}

	let { text, depth, raw }: Props = $props();

	const slugger = new marked.Slugger();

	const headingLevel = $derived(
	  Number(depth) || (raw.match(/^#+/g)?.[0].length ?? 1)
	);
	const element = $derived(`h${headingLevel}`);
	const slug = $derived(slugger.slug(text));

	// const fullUrl = $derived(`${page.url.origin}${page.url.pathname}#${slug}`);
</script>

<svelte:element
    this={element}
    id={slug}
    class="text-primary dark:text-white"
>
	{text}
</svelte:element>

<style lang="postcss">
	h1 {
		@apply text-4xl md:text-5xl;
	}
	h2 {
		@apply text-3xl md:text-4xl;
	}
	h3 {
		@apply text-2xl md:text-3xl;
	}
	h4 {
		@apply text-xl md:text-2xl;
	}
	h5 {
		@apply text-lg md:text-xl;
	}
	h6 {
		@apply text-base md:text-lg;
	}
</style>
