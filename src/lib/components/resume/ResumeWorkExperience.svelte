<script lang="ts">
	import type WorkExperience from '#lib/data/work-experiences/model';
	import ResumeSection from './ResumeSection.svelte';
	interface Props {
		workExperience?: WorkExperience[];
	}

	let { workExperience = [] }: Props = $props();
</script>

<ResumeSection title="Work Experience">
	{#each workExperience as experience, index}
		<div class="flex gap-4">
			<div class="flex flex-col items-center h-full relative">
				<div
					class={`grid place-items-center border-2 rounded-full h-5 w-5 mt-2 ${
						experience.current
							? 'border-accent-light/50 dark:border-accent/50'
							: 'border-accent-light/80 dark:border-accent/80'
					}`}
				>
					{#if experience.current}
						<div class="bg-accent-light dark:bg-accent rounded-full h-2.5 w-2.5"></div>
					{/if}
				</div>
				<p class="text-subtitle text-xs">{experience.timeFrame.split(' ')[0]}</p>
				{#if index < workExperience.length - 1}
					<div
						style="height: 90%"
						class="absolute hidden sm:block top-12 border border-dashed border-accent-light/80 dark:border-accent/80"
					></div>
				{/if}
			</div>
			<div class="flex flex-col">
				<p class="font-semibold text-lg">{experience.designation}</p>
				<div class="text-subtitle text-sm">
					<p>{experience.company}</p>
				</div>
				<ol class="font-medium text-base list-disc">
					{#each experience.description as description}
						<li>{description}</li>
					{/each}
				</ol>
			</div>
		</div>
	{/each}
</ResumeSection>
