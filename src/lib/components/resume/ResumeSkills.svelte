<script lang="ts">
	import ResumeSection from './ResumeSection.svelte';

	const skills = [
		'TypeScript',
		'Python',
		'Rust',
		'PHP',
		'C',
		'Java',
		'C#',

		'React',
		'React Native',
		'Svelte',
		'VueJS',
		'NextJS',
		'TailwindCSS',

		'NodeJS',
		'Django',
		'PWAs',
		'MongoDb',
		'SQL',
		'Socket.io',
		'WordPress',
		'Linux'
	];
</script>

<ResumeSection title="Skills">
	<div class="skills-container grid gap-y-4 gap-x-2.5 md:gap-y-5 md:gap-x-3.5">
		{#each skills as skill}
			<p
				class="py-1.5 px-2.5 rounded-md
				border border-accent-light dark:border-accent
				bg-accent-light dark:bg-accent bg-opacity-30 dark:bg-opacity-30
				md:backdrop-blur text-nowrap"
			>
				{skill}
			</p>
		{/each}
	</div>
</ResumeSection>

<style>
	.skills-container {
		grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
	}
</style>
