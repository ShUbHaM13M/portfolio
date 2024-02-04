<script lang="ts">
	import Section from '$lib/components/atoms/Section.svelte';
	import BlogPostCard from '$lib/components/molecules/BlogPostCard.svelte';
	import type { Blog, PaginatedResult } from '$lib/utils/types';

	export let data: PaginatedResult<Blog>;

	$: blogs = data.items;
	$: totalPages = data.totalPages;
	$: currentPage = data.currentPage;
</script>

{#key currentPage}
	<Section id="blogs" additionalClass="md:pr-20 mt-20">
		<div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			{#each blogs as blog, index}
				<BlogPostCard
					coverImage={blog.coverImage}
					excerpt={blog.excerpt}
					slug={blog.slug}
					title={blog.title}
				/>
			{/each}
		</div>
		<div class="flex gap-1 mt-4 justify-center">
			{#each Array.from({ length: totalPages }) as _, index}
				<button class="bg-white p-2 rounded-md">{index + 1}</button>
			{/each}
		</div>
	</Section>
{/key}
