<script lang="ts">
	import Section from '$lib/components/atoms/Section.svelte';
	import BlogPostCard from '$lib/components/molecules/BlogPostCard.svelte';
	import ProjectCard from '$lib/components/molecules/ProjectCard.svelte';
	import { ArticleType, type Blog, type PaginatedResult, type Project } from '$lib/utils/types';

	export let data: PaginatedResult<Blog | Project> & { currentCategory: string };
	$: articles = data.items;
	$: totalPages = data.totalPages;
	$: currentPage = data.currentPage;
	$: currentCategory = data.currentCategory;
</script>

<Section id="articles" additionalClass="flex flex-col gap-4 min-h-screen md:pr-20 mt-10 pb-10">
	<h1 class="font-short-stack mt-2 mb-1 md:my-3 text-primary dark:text-white text-3xl">
		Category:
		<span class="text-accent-light dark:text-accent capitalize">{currentCategory}</span>
	</h1>

	<div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
		{#each articles as article}
			{#if article.type === ArticleType.blog}
				<BlogPostCard
					slug={article.slug}
					excerpt={article.excerpt}
					title={article.title}
					coverImage={article.coverImage}
				/>
			{:else if article.type === ArticleType.project}
				<ProjectCard
					slug={`project/${article.slug}`}
					name={article.name}
					excerpt={article.description}
					imageUrl={article?.images?.length ? article.images[0] : undefined}
				/>
			{/if}
		{/each}
	</div>

	{#if totalPages > 1}
		<div class="flex gap-4 mt-8 justify-center">
			{#each Array.from({ length: totalPages }) as _, index}
				<a
					href={`/category/${currentCategory}/${index + 1}`}
					class={`px-4 w-fit py-2 text-xl rounded-md transition-colors ease-out duration-300
						${
							currentPage === index + 1
								? 'bg-accent-light dark:bg-accent text-white dark:text-primary font-semibold'
								: 'text-accent-light dark:text-accent bg-transparent outline outline-1 outline-accent-light dark:outline-accent font-medium hover:bg-accent-light hover:bg-opacity-20 dark:hover:bg-accent dark:hover:bg-opacity-20'
						}`}
				>
					{index + 1}
				</a>
			{/each}
		</div>
	{/if}
</Section>
