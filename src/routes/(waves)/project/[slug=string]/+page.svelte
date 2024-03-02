<script lang="ts">
	import Image from '$lib/components/atoms/Image.svelte';
	import Tag from '$lib/components/atoms/Tag.svelte';
	import Markdown from '$lib/components/molecules/Markdown.svelte';
	import type { Project } from '$lib/utils/types';
	import '$lib/themes/codeblock/frappe.css';
	import IconGithub from '$lib/icons/IconGithub.svelte';

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
		<div class="flex flex-col sm:flex-row justify-between">
			<h1 class="leading-tight md:leading-none text-[28px] md:text-[42px] font-bold">
				{project.name}
			</h1>
			{#if project.githubLink}
				<a target="_blank" rel="noopener noreferrer" href={project.githubLink}>
					<IconGithub classes="icon-link size-9 md:size-12 opacity-100" />
				</a>
			{/if}
		</div>
		{#if project.technologies.length}
			<div class="flex flex-wrap gap-2">
				{#each project.technologies as tag}
					<Tag
						label={tag.label}
						color={tag.accentColor}
						linkPrefix="project/category"
						highlightOnHover={false}
					/>
				{/each}
			</div>
		{/if}

		{#if project.images}
			<div class="flex sm:flex-wrap gap-4 align-center overflow-x-auto w-full">
				{#each project.images as image, index}
					<div class="image-container w-fit sm:w-80 h-fit sm:h-96 pb-4 sm:pb-0">
						<!-- TODO: Add support for image alt -->
						<Image
							src={image}
							alt=""
							additionalClasses="h-auto max-w-full w-full object-contain rounded-lg object-top"
						/>
					</div>
				{/each}
			</div>
		{/if}

		{#if project.content}
			<div class="markdown-content flex flex-col gap-6">
				<Markdown content={project.content} />
			</div>
		{/if}
	</div>
{/key}

<style lang="postcss">
	.image-container::-webkit-scrollbar-track {
		background-color: transparent;
	}
	.image-container {
		min-width: 90%;
	}
	:global(.image-container img) {
		max-height: 60svh;
	}
	@screen sm {
		.image-container {
			min-width: 0;
		}
		:global(.image-container img) {
			max-height: 100%;
		}
	}
</style>
