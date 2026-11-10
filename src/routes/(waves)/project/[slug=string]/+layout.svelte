<script lang="ts">
    import type { Snippet } from 'svelte';

	import type { Palette, Project } from '#lib/utils/types';
	import { swatch } from '#lib/stores/swatch';

	import {
	    title,
		siteBaseUrl,
		keywords,
		image as metaImage
	} from '#lib/data/meta';

	interface Props {
		data: { project: Project; colours?: Palette };
		children?: Snippet;
	}

	let { data, children }: Props = $props();

	let project = $derived(data.project);

	$effect(() => {
	    if (data.colours) {
			swatch.set(data.colours);
	    }
	})

	const metaKeywords = $derived([
	    ...(project.technologies.map((tag) => tag.label) ?? []),
		...keywords
	]);
</script>

<svelte:head>
	{#if project}
		<meta name="keywords" content={metaKeywords.join(', ')} />

		<meta name="description" content={project.description} />
		<meta name="og:description" content={project.description} />
		<meta name="twitter:description" content={project.description} />

		<link rel="cannonical" href="{siteBaseUrl}/{project.slug}" />

		<!-- <name>{project.name} - {title}</name> -->
		<meta property="og:name" content="{project.name} - {title}" />
		<meta property="twitter:title" content="{project.name} - {title}" />

		<!-- TODO: Add a socialImage field -->
		<!-- TODO: Add src attributes to all the images of project -->
		<!-- {#if project.socialImage?.src}
			<meta property="og:image" content="{siteBaseUrl}{project.socialImage.src}" />
			<meta name="twitter:image" content="{siteBaseUrl}{project.socialImage.src}" /> -->
		{#if project.images}
			<meta property="og:image" content="{siteBaseUrl}{project.images[0]}" />
			<meta name="twitter:image" content="{siteBaseUrl}{project.images[0]}" />
		{:else}
			<meta property="og:image" content={metaImage} />
			<meta property="twitter:image" content={metaImage} />
		{/if}
	{/if}
</svelte:head>

{#if project}
	<section class="mt-0 bg-checkered pt-[75px] pb-6 md:pt-px min-h-screen">
		{@render children?.()}
	</section>
{/if}
