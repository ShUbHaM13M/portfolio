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
	<Section id="blogs" additionalClass="md:pr-20 mt-20 pb-10">
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
		{#if totalPages > 1}
			<div class="flex gap-4 mt-8 justify-center">
				{#each Array.from({ length: totalPages }) as _, index}
					<a
						href={`/blog/${index + 1}`}
						class={`px-4 w-fit py-2 text-xl rounded-md transition-colors ease-out duration-300
						${
							currentPage === index + 1
								? 'bg-accent text-primary font-semibold'
								: 'text-accent bg-transparent outline outline-1 outline-accent font-medium hover:bg-accent hover:bg-opacity-20'
						}`}
					>
						{index + 1}
					</a>
				{/each}
			</div>
		{/if}
	</Section>
{/key}
