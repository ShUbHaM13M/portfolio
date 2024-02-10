<script lang="ts">
	import { page } from '$app/stores';
	import { marked } from 'marked';

	export let text: string;
	export let depth: string;
	export let raw: string;

	const slugger = new marked.Slugger();

	const headingLevel = depth ?? raw.match(/#/g)?.length;
	const element = `h${headingLevel}`;
	const slug = slugger.slug(text);

	const fullUrl = `${$page.url.origin}${$page.url.pathname}#${slug}`;
</script>

<svelte:element this={element} id={slug} class="text-white">
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
