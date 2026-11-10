<script lang="ts">
	import type { PaginatedResult, Project } from '#lib/utils/types';
	import Section from '#lib/components/atoms/Section.svelte';
	import ProjectCard from '#lib/components/molecules/ProjectCard.svelte';

	interface Props {
		data: PaginatedResult<Project>;
	}

	let { data }: Props = $props();

	let projects = $derived(data.items);
	let totalPages = $derived(data.totalPages);
	let currentPage = $derived(data.currentPage);
</script>

{#key currentPage}
	<Section id="projects" additionalClass="md:pr-20 mt-20 pb-10">
		<div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			{#each projects as project, index}
				<ProjectCard
					slug={`project/${project.slug}`}
					imageUrl={project.images?.length ? project.images[0] : undefined}
					excerpt={project.description}
					name={project.name}
				/>
			{/each}
		</div>

		{#if totalPages > 1}
			<div class="flex gap-4 mt-8 justify-center">
				{#each Array.from({ length: totalPages }) as _, index}
					<a
						href={`/project/${index + 1}`}
						class={`px-4 w-fit py-2 text-xl rounded-md transition-colors ease-out duration-300
						${
							currentPage === index + 1
								? 'bg-accent-light dark:bg-accent text-white dark:text-primary font-semibold'
								: 'text-accent-light dark:text-accent bg-transparent outline outline-1 outline-accent-light dark:outline-accent font-medium hover:bg-accent-light/20 dark:hover:bg-accent/20'
						}`}
					>
						{index + 1}
					</a>
				{/each}
			</div>
		{/if}
	</Section>
{/key}
