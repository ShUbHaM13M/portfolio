<script lang="ts">
	import type { Skill } from '$lib/utils/types';
	import Section from '$lib/components/atoms/Section.svelte';
	import SkillCard from '$lib/components/molecules/SkillCard.svelte';

	export let skills: Skill[] = [];
</script>

<Section
	id="expertise"
	title="Expertise"
	description="Tech Polyglot with expertise across technology domains."
	additionalClass="flex flex-col gap-4 min-h-screen md:pr-20 pb-10"
>
	<div class="flex flex-col lg:flex-row gap-6 mt-2 sm:mt-4">
		{#each skills as skill}
			<SkillCard
				descriptionClasses={skill.descriptionClasses}
				icon={skill.icon}
				containerClasses={skill.containerClasses}
				description={skill.description}
				index={skill.index}
				tagBegin={skill.tagBegin}
				tagEnd={skill.tagEnd}
				title={skill.title}
			/>
		{/each}
	</div>
</Section>

<style lang="postcss">
	:global(.skill-icon) {
		--size: 38px;
		width: var(--size);
		height: var(--size);
	}
	@screen sm {
		:global(.skill-icon) {
			--size: 50px;
		}
	}
</style>
