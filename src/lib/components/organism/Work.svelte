<script lang="ts">
	import type { WorkExperience } from '$lib/utils/types';
	import Button from '../atoms/Button.svelte';
	import WorkExperienceCard from '../molecules/WorkExperienceCard.svelte';
	import Section from '../atoms/Section.svelte';
	export let workExperiences: WorkExperience[] = [];
</script>

<Section
	id="work"
	title="Work"
	description="I've worked on a lot of cool projects and learned a lot from great people."
	additionalClass="flex flex-col gap-4 min-h-screen md:pr-20 pb-10"
>
	<div class="flex flex-col md:flex-row gap-4 md:gap-6 mt-4 md:mt-8">
		{#each workExperiences as work}
			<WorkExperienceCard {work} />
		{/each}
	</div>
	<Button additionalClass="mt-2 md:mt-4 md:ml-auto" href="/resume" variant="outlined">
		View Resume
	</Button>
</Section>
