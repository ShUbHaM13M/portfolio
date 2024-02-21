<script lang="ts">
	import Section from '$lib/components/atoms/Section.svelte';
	import ProjectCard from '$lib/components/molecules/ProjectCard.svelte';
	import IconGithub from '$lib/icons/IconGithub.svelte';
	import IconExternalLink from '$lib/icons/IconExternalLink.svelte';

	import type { Project as ProjectType } from '$lib/utils/types';

	// TODO: Replace projects with .md files
	export let projects: ProjectType[] = [];
</script>

<Section
	id="project"
	title="Projects"
	description="I like exploring different project ideas when learning. Most of my projects are open source!"
	additionalClass="flex flex-col gap-4 min-h-screen pb-10 md:pr-20"
>
	<div class="project-container grid gap-4 mt-2 sm:mt-4">
		{#each projects as project, index}
			<ProjectCard
				name={project.name}
				excerpt={project.description}
				imageUrl={project?.images?.length ? project.images[0] : undefined}
				tags={project.technologies}
				containerClasses={`${index > 2 ? 'hidden md:flex' : ''}`}
			/>
		{/each}
		<a
			title="See All Projects"
			href="/projects"
			class="project-card mt-0 grid py-2 place-items-center w-full h-full
			bg-accent bg-opacity-30 hover:bg-opacity-40 border-2 border-accent border-opacity-20 backdrop-blur-md
			rounded-lg text-xl md:text-2xl font-medium text-white focus:outline-none focus-visible:outline-none
			transition-all duration-300 ease-out"
		>
			See All Projects
		</a>
	</div>
</Section>

<style>
	.project-container {
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	}
	:global(.project-container:has(.project-card:hover) .project-card:not(:hover)) {
		opacity: 0.8;
		filter: blur(1px);
	}
</style>
