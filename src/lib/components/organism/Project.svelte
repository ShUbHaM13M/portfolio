<script>
	import Section from '$lib/components/atoms/Section.svelte';
	import ProjectCard from '$lib/components/molecules/ProjectCard.svelte';
	import IconGithub from '$lib/icons/IconGithub.svelte';
	import IconExternalLink from '$lib/icons/IconExternalLink.svelte';
	import Button from '$lib/components/atoms/Button.svelte';

	// TODO: Only 5 featured projects
	// TODO: Replace projects with .md files
	let projects = [
		{
			title: 'Stories.io - Story App',
			excerpt:
				"Stories.io is a React Native app that connect with an expressjs server, allows users to browse, create, change and delete their stories stores on a mongoDb database. Users can like and comments on other user's stories and also set their stories as private",
			imageUrl:
				'https://cdn.sanity.io/images/bj34pdbp/migration/bca4bfbc722f4acaceaece20a0ef957e9f18bb6e-2024x1012.png?w=1920&q=75&fit=clip&auto=format',
			link: { href: 'https://www.github.com', icon: IconGithub },
			tags: [
				{ text: 'HTML', backgroundColor: '#FFE0C3', color: '#FF8716' },
				{ text: 'CSS', backgroundColor: '#C3DBFF', color: '#3481F5' },
				{ text: 'react', backgroundColor: 'rgb(8 126 164)', color: '#fff' }
			]
		},
		{
			title: 'Stories.io - Story App',
			excerpt:
				"Stories.io is a React Native app that connect with an expressjs server, allows users to browse, create, change and delete their stories stores on a mongoDb database. Users can like and comments on other user's stories and also set their stories as private",
			imageUrl:
				'https://cdn.sanity.io/images/bj34pdbp/migration/bca4bfbc722f4acaceaece20a0ef957e9f18bb6e-2024x1012.png?w=1920&q=75&fit=clip&auto=format',
			link: { href: 'https://www.github.com', icon: IconExternalLink },
			tags: [
				{ text: 'HTML', backgroundColor: '#FFE0C3', color: '#FF8716' },
				{ text: 'CSS', backgroundColor: '#C3DBFF', color: '#3481F5' }
			]
		},
		{
			title: 'Stories.io - Story App',
			excerpt:
				"Stories.io is a React Native app that connect with an expressjs server, allows users to browse, create, change and delete their stories stores on a mongoDb database. Users can like and comments on other user's stories and also set their stories as private",
			imageUrl:
				'https://cdn.sanity.io/images/bj34pdbp/migration/bca4bfbc722f4acaceaece20a0ef957e9f18bb6e-2024x1012.png?w=1920&q=75&fit=clip&auto=format',
			tags: [
				{ text: 'Django', backgroundColor: 'CADETBLUE', color: '#000' },
				{ text: 'CSS', backgroundColor: '#C3DBFF', color: '#3481F5' }
			]
		},
		{
			title: 'Stories.io - Story App',
			excerpt:
				"Stories.io is a React Native app that connect with an expressjs server, allows users to browse, create, change and delete their stories stores on a mongoDb database. Users can like and comments on other user's stories and also set their stories as private",
			imageUrl:
				'https://cdn.sanity.io/images/bj34pdbp/migration/bca4bfbc722f4acaceaece20a0ef957e9f18bb6e-2024x1012.png?w=1920&q=75&fit=clip&auto=format'
		},
		{
			title: 'Stories.io - Story App',
			excerpt:
				"Stories.io is a React Native app that connect with an expressjs server, allows users to browse, create, change and delete their stories stores on a mongoDb database. Users can like and comments on other user's stories and also set their stories as private",
			imageUrl:
				'https://cdn.sanity.io/images/bj34pdbp/migration/bca4bfbc722f4acaceaece20a0ef957e9f18bb6e-2024x1012.png?w=1920&q=75&fit=clip&auto=format'
		}
	];
</script>

<Section
	id="project"
	title="Projects"
	description="I like exploring different project ideas when learning. Most of my projects are open source!"
	additionalClass="flex flex-col gap-4 min-h-screen pb-10 md:pr-20"
>
	<div class="project-container grid gap-4 mt-2 sm:mt-4">
		{#each projects as project}
			<ProjectCard {...project} />
		{/each}
		<a
			title="See All Projects"
			href="/projects"
			target="_blank"
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
