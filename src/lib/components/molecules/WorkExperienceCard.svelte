<script lang="ts">
	import type { WorkExperience } from '$lib/utils/types';
	import Tag from '../atoms/Tag.svelte';

	export let additionalClass: string = '';
	export let work: WorkExperience;
</script>

<div
	class={`flex flex-1 flex-col gap-2 md:gap-5 p-4 md:p-6 bg-[#343F52] text-white rounded-lg ${additionalClass}`}
>
	<div>
		<p class="font-extrabold text-2xl md:text-3xl">{work.company}</p>
		<p class="text-lg">{work.designation}</p>
		<p class="text-base">{work.timeFrame}</p>
	</div>
	<p class="text-base md:text-xl">{work.description}</p>

	<div class="flex gap-1 md:gap-2 mt-4 md:mt-auto">
		{#each work.tags as tag}
			<Tag
				color={tag.accentColor}
				label={tag.label}
				text={tag.textColor}
				highlightOnHover={false}
			/>
		{/each}
	</div>
</div>
