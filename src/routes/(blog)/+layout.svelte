<script lang="ts">
	import type { Blog, Palette } from '$lib/utils/types';
	import Header from '$lib/components/organism/Header.svelte';
	export let data: { blog: Blog; colours?: Palette };
	import { swatch } from '$lib/stores/swatch';

	import { title, siteBaseUrl, keywords, image as metaImage } from '$lib/data/meta';

	$: ({ blog } = data);

	if (data.colours) {
		swatch.set(data.colours);
	}

	let metaKeywords = keywords;

	$: {
		if (blog?.categories?.length) {
			metaKeywords = blog.categories.concat(metaKeywords);
		}
		if (blog?.tags?.length) {
			metaKeywords = blog.tags.map((tag) => tag.label).concat(metaKeywords);
		}
		// if (blog?.keywords?.length) {
		// 	metaKeywords = blog.keywords.concat(metaKeywords);
		// }
	}
</script>

<svelte:head>
	{#if blog}
		<meta name="keywords" content={keywords.join(', ')} />

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
	<Header />
	<main
		class="bg-checkered pt-[75px] pb-6 md:pt-px bg-light-white backdrop-brightness-50 dark:bg-primary dark:backdrop-brightness-100 bg-top"
	>
		<slot />
	</main>
{/if}
