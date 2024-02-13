<script lang="ts">
	export let theme: 'light' | 'dark' = 'dark';
	import ResumeQuickLinks from '../molecules/ResumeQuickLinks.svelte';
	import ResumeSectionHeading from '../molecules/ResumeSectionHeading.svelte';
</script>

<section
	id="resume"
	class={`flex flex-col gap-12 py-10 px-12 rounded-md transition-colors ease-out duration-300 bg-checkered ${theme}`}
>
	<div class="flex flex-col gap-2">
		<h1 class="font-bold text-5xl">Shubham Maurya</h1>
		<h2 class="text-accent text-3xl">Software Developer</h2>
		<ResumeQuickLinks />
	</div>
	<div class="flex gap-10">
		<div class="flex flex-col flex-1 gap-9">
			<div class="flex flex-1 flex-col gap-5">
				<ResumeSectionHeading title="Work Experience" />
			</div>
			<div class="flex flex-1 flex-col gap-5">
				<ResumeSectionHeading title="Education" />
			</div>
		</div>
		<div class="flex flex-col flex-1 gap-9">
			<div class="flex flex-1 flex-col gap-5">
				<ResumeSectionHeading title="About" />
				<p class="text-base">
					I am passionate about problem-solving, transforming designs into reality, and iteratively
					enhancing them. This drive extends to a continuous pursuit of learning, where I actively
					seek new knowledge that can be applied across diverse domains within software development.
					I thrive on exploring various facets of this field, consistently aiming to broaden my
					skills and contribute to practical solutions.
				</p>
			</div>
			<div class="flex flex-1 flex-col gap-5">
				<ResumeSectionHeading title="Skills" />
				<p class="text-base"></p>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	:global(#resume.dark) {
		@apply bg-primary text-white;
	}
	:global(#resume.light) {
		@apply bg-secondary text-primary;
	}
	:global(#resume *) {
		@apply transition-colors ease-out duration-300;
	}
</style>
