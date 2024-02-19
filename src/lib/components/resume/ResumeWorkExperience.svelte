<script lang="ts">
	import type WorkExperience from '$lib/data/work-experiences/model';
	import ResumeSection from './ResumeSection.svelte';
	export let workExperience: WorkExperience[] = [];
</script>

<ResumeSection title="Work Experience" containerClasses="order-1 md:order-0">
	{#each workExperience as experience, index}
		<div class="flex gap-4">
			<div class="flex flex-col items-center h-full relative">
				<div
					class="grid place-items-center border-accent border-2 border-opacity-80 rounded-full h-5 w-5 mt-2"
					class:border-opacity-50={experience.current}
				>
					{#if experience.current}
						<div class="bg-accent rounded-full h-2.5 w-2.5"></div>
					{/if}
				</div>
				<p class="text-subtitle text-xs">{experience.timeFrame.split(' ')[0]}</p>
				{#if index < workExperience.length - 1}
					<div
						style="height: 80%"
						class="absolute hidden sm:block top-12 border border-dashed border-accent border-opacity-80"
					></div>
				{/if}
			</div>
			<div class="flex flex-col">
				<p class="font-semibold text-lg">{experience.designation}</p>
				<div class="text-subtitle text-sm">
					<p>{experience.company}</p>
				</div>
				<p class="font-medium text-base">
					{experience.description}
				</p>
			</div>
		</div>
	{/each}
</ResumeSection>
