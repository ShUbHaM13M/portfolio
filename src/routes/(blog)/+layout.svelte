<script lang="ts">
	import type { Blog } from '$lib/utils/types';
	import Header from '$lib/components/organism/Header.svelte';
	export let data: { blog: Blog };

	import { title, siteBaseUrl, keywords, image as metaImage } from '$lib/data/meta';

	$: ({ blog } = data);
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

<Header />

<main class="pt-[75px] pb-6 md:pt-0">
	<slot />
</main>
