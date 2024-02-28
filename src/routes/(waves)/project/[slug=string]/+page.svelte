<script lang="ts">
	import Tag from '$lib/components/atoms/Tag.svelte';
	import Carousel from '$lib/components/molecules/Carousel.svelte';
	import Markdown from '$lib/components/molecules/Markdown.svelte';
	import type { Project } from '$lib/utils/types';

	export let data: { project: Project };
	$: ({ project } = data);
</script>

{#key project}
	<div
		class="relative container flex flex-col mt-6 md:mt-28 lg:mt-32
		md:bg-primary md:bg-opacity-10 md:dark:bg-header dark:bg-opacity-10
		text-primary dark:text-white gap-6 md:gap-10
		p-6 rounded-t-xl md:mx-auto md:w-11/12 md:rounded-xl h-full
		backdrop-blur-md md:backdrop-blur-lg md:border md:border-white md:border-opacity-20"
	>
		<h1 class="leading-tight md:leading-none text-[28px] md:text-[42px] font-bold">
			{project.name}
		</h1>
		{#if project.technologies.length}
			<div class="flex gap-2">
				{#each project.technologies as tag}
					<Tag
						label={tag.label}
						color={tag.accentColor}
						text={tag.textColor}
						linkPrefix="project/category"
						highlightOnHover={false}
					/>
				{/each}
			</div>
		{/if}
		{#if project.images}
			<Carousel images={project.images} />
		{/if}
		{#if project.content}
			<div class="markdown-content flex flex-col gap-6 md:gap-10">
				<Markdown content={project.content} />
			</div>
		{/if}
	</div>
{/key}
