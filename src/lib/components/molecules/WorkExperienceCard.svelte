<script lang="ts">
	import type { WorkExperience } from '$lib/utils/types';

	export let additionalClass: string = '';
	export let work: WorkExperience;
</script>

<div
	class={`container flex flex-1 flex-col gap-4 p-4 py-5 bg-card-light dark:bg-card text-primary dark:text-white rounded-lg ${additionalClass}`}
>
	<div>
		<p class="font-extrabold text-2xl md:text-3xl">{work.company}</p>
		<p class="text-lg">{work.designation}</p>
		<p class="text-base">{work.timeFrame}</p>
	</div>
	<p class="line-clamp-5 text-lg leading-tight">
		{#each work.description as description}
			{description}
			<br />
		{/each}
	</p>

	<!-- <div class="flex gap-1 md:gap-2 mt-4 md:mt-auto">
		{#each work.tags as tag}
			<Tag
				color={tag.accentColor}
				label={tag.label}
				text={tag.textColor}
				highlightOnHover={false}
			/>
		{/each}
	</div> -->
</div>
