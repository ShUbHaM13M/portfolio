<script lang="ts">
	import Button from '$lib/components/atoms/Button.svelte';
	import Section from '$lib/components/atoms/Section.svelte';
	import Resume from '$lib/components/organism/Resume.svelte';
	import type WorkExperience from '$lib/data/work-experiences/model';

	import IconDarkMode from '$lib/icons/IconDarkMode.svelte';
	import IconLightMode from '$lib/icons/IconLightMode.svelte';

	let theme = 'dark';

	export let data: { workExperience: WorkExperience[] };

	function onThemeButtonClick() {
		theme = theme === 'dark' ? 'light' : 'dark';
	}
</script>

<Section additionalClass="pt-20 pb-10 flex justify-center pl-0 md:pl-6 bg-card pr-0 md:pr-6">
	<div class="resume-container flex flex-col mt-10 gap-4 w-full">
		// TODO: Update link to resume
		<Button href="/Shubham Maurya - Resume.pdf" variant="filled">Download as PDF</Button>
		<!-- <div class="flex gap-4 items-center mx-auto">
			<button on:click={onThemeButtonClick}>
				{#if theme === 'dark'}
					<IconDarkMode classes="w-12 h-12" />
				{:else}
					<IconLightMode classes="w-12 h-12" />
				{/if}
			</button>
		</div> -->
		<Resume {theme} workExperience={data.workExperience} />
	</div>
</Section>

<style lang="postcss">
	@screen sm {
		.resume-container {
			max-width: 900px;
		}
	}
</style>
