<script lang="ts">
    import type { Snippet } from 'svelte'

	import type { Blog, Palette } from '#lib/utils/types';
	import { swatch } from '#lib/stores/swatch';

	import {
	    title,
		siteBaseUrl,
		keywords,
		image as metaImage
	} from '#lib/data/meta';

	interface Props {
		data: { blog: Blog; colours?: Palette };
		children?: Snippet;
	}

	let { data, children }: Props = $props();

	let blog = $derived(data.blog);

	$effect(() => {
	    if (data.colours) {
			swatch.set(data.colours);
	    }
	})

	const metaKeywords = $derived([
		...(blog?.tags?.map((tag) => tag.label) ?? []),
		...(blog?.categories ?? []),
		...keywords
	]);
</script>

<svelte:head>
	{#if blog}
		<meta name="keywords" content={metaKeywords.join(', ')} />

		<meta name="description" content={blog.excerpt} />
		<meta name="og:description" content={blog.excerpt} />
		<meta name="twitter:description" content={blog.excerpt} />

		<link rel="cannonical" href="{siteBaseUrl}/{blog.slug}" />

		<title>{blog.title} - {title}</title>
		<meta property="og:title" content="{blog.title} - {title}" />
		<meta property="twitter:title" content="{blog.title} - {title}" />

		{#if blog.socialImage?.src}
			<meta property="og:image" content="{siteBaseUrl}{blog.socialImage.src}" />
			<meta name="twitter:image" content="{siteBaseUrl}{blog.socialImage.src}" />
		{:else if blog.coverImage?.src}
			<meta property="og:image" content="{siteBaseUrl}{blog.coverImage.src}" />
			<meta name="twitter:image" content="{siteBaseUrl}{blog.coverImage.src}" />
		{:else}
			<meta property="og:image" content={metaImage} />
			<meta property="twitter:image" content={metaImage} />
		{/if}
	{/if}
</svelte:head>

{#if blog}
	<main
		class="bg-checkered pt-18.75 pb-6 md:pt-px bg-light-white backdrop-brightness-50 dark:bg-primary dark:backdrop-brightness-100 bg-top"
	>
		{@render children?.()}
	</main>
{/if}
