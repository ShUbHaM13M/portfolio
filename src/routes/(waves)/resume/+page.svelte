<script lang="ts">
	import Button from '$lib/components/atoms/Button.svelte';
	import Section from '$lib/components/atoms/Section.svelte';
	import Resume from '$lib/components/organism/Resume.svelte';
	import type WorkExperience from '$lib/data/work-experiences/model';

	export let data: { workExperience: WorkExperience[] };
</script>

<Section
	additionalClass="pt-20 pb-10 flex justify-center pl-0 md:pl-6 pr-0 md:pr-6 backdrop-brightness-90 dark:backdrop-brightness-50 transition-colors ease-out duration-300"
>
	<div class="resume-container flex flex-col mt-10 gap-4 w-full mx-4 md:mx-auto">
		<Button
			href="https://raw.githubusercontent.com/ShUbHaM13M/portfolio/master/static/Shubham%20Maurya%20-%20Resume.pdf"
			variant="filled"
		>
			Download as PDF
		</Button>
		<Resume workExperience={data.workExperience} />
	</div>
</Section>

<style lang="postcss">
	@screen sm {
		.resume-container {
			max-width: 900px;
		}
	}
</style>
