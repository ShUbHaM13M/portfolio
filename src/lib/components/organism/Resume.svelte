<script lang="ts">
	// TODO: Add a profile photo in the resume
	import type WorkExperience from '$lib/data/work-experiences/model';
	export let theme: 'light' | 'dark' = 'dark';
	import ResumeQuickLinks from '../resume/ResumeQuickLinks.svelte';
	import ResumeSection from '../resume/ResumeSection.svelte';
	import ResumeSkills from '../resume/ResumeSkills.svelte';
	import ResumeWorkExperience from '../resume/ResumeWorkExperience.svelte';
	import ResumeEducation from '../resume/ResumeEducation.svelte';
	export let workExperience: WorkExperience[] = [];
</script>

<section
	id="resume"
	class={`flex flex-col mx-4 md:mx-auto gap-6 sm:gap-12 p-4 sm:py-10 sm:px-12 rounded-md transition-colors ease-out duration-300 bg-checkered ${theme}`}
>
	<div class="flex flex-col gap-1 sm:gap-2">
		<h1 class="font-bold text-4xl sm:text-5xl">Shubham Maurya</h1>
		<h2 class="text-accent text-xl sm:htext-3xl">Software Developer</h2>
		<ResumeQuickLinks />
	</div>
	<div class="flex flex-col md:flex-row gap-10">
		<div class="flex flex-col flex-1 gap-9 order-1 md:order-0">
			<ResumeWorkExperience {workExperience} />
			<ResumeEducation />
		</div>
		<div class="flex flex-col flex-1 gap-9 order-0 md:order-1">
			<ResumeSection title="About" containerClasses="grow-0">
				<p class="text-base">
					I am passionate about problem-solving, transforming designs into reality, and iteratively
					enhancing them. This drive extends to a continuous pursuit of learning, where I actively
					seek new knowledge that can be applied across diverse domains within software development.
					I thrive on exploring various facets of this field, consistently aiming to broaden my
					skills and contribute to practical solutions.
				</p>
			</ResumeSection>
			<ResumeSkills />
		</div>
	</div>
</section>

<style lang="postcss">
	:global(#resume.dark) {
		@apply bg-primary text-secondary;
	}
	:global(#resume.light) {
		@apply bg-white text-primary;
	}
	:global(#resume *) {
		@apply transition-colors ease-out duration-300;
	}
</style>
