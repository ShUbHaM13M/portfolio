<script lang="ts">
	import Button from '../atoms/Button.svelte';
	import type { Blog } from '$lib/utils/types';
	import BlogPostCard from '../molecules/BlogPostCard.svelte';
	import Section from '../atoms/Section.svelte';
	export let blogs: Blog[] = [];
</script>

<Section
	id="blog"
	title="Recent Blogs"
	additionalClass="flex flex-col px-6 pb-10 md:px-20 pt-10 min-h-screen"
>
	<slot name="description">
		<h2 class="leading-6 sm:leading-tight text-subtitle text-lg md:text-2xl mt-2">
			Every now and then I like to write about technology and experiences. <br /> Here are some of the
			recent blogs.
		</h2>
	</slot>
	<div class="flex flex-col flex-wrap md:flex-row gap-4 mt-6 md:mt-8">
		{#each blogs as blog}
			<BlogPostCard {...blog} />
		{/each}
	</div>
	<Button
		additionalClass="mt-4 w-full text-center md:w-fit md:mt-8 md:ml-auto"
		href="/blog"
		variant="outlined"
	>
		View More
	</Button>
</Section>
