<script lang="ts" context="module">
	import type { SvelteComponent } from 'svelte';
	export type Link = {
		href: string;
		icon: typeof SvelteComponent;
	};

	export type Tag = {
		text: string;
		backgroundColor?: string;
		color: string;
	};
</script>

<script lang="ts">
	export let imageUrl: string | undefined = undefined;
	export let title: string = '';
	export let excerpt: string = '';
	export let link: Link | undefined = undefined;

	export let containerClasses: string | undefined = undefined;
	export let tags: Tag[] = [];
</script>

<div
	class={`container flex flex-col gap-2 md:gap-4 p-4 md:p-6 text-white rounded-lg bg-header ${containerClasses}`}
>
	{#if imageUrl}
		<img
			class="project-card-image aspect-video w-full rounded-md"
			src={imageUrl}
			alt={`Screenshot of ${title}`}
		/>
	{/if}
	<div class="flex justify-between items-center">
		<p class="font-medium text-2xl leading-8">{title}</p>
		{#if link}
			<a href={link.href} target="_blank" title="">
				<svelte:component this={link.icon} />
			</a>
		{/if}
	</div>
	<p style="--number-of-lines: 2" class="text-base sm:text-xl leading-5 sm:leading-6 clamp-lines">
		{excerpt}
	</p>
	<div class="flex flex-wrap gap-2">
		<!-- TODO: Add textColor when backgroundColor is not provided    -->
		{#each tags.slice(0, 3) as tag}
			<div
				style={`
					color: ${tag.color};
					background-color: ${tag.backgroundColor};
				`}
				class="grid place-items-center text-sm md:text-base py-1 md:py-2 px-4 md:px-6 rounded-full capitalize font-bold"
			>
				{tag.text}
			</div>
		{/each}
	</div>
</div>

<style lang="postcss" scoped>
	.container {
		max-width: 400px;
	}
	.project-card-image {
		max-height: 140px;
		@apply object-cover;
	}
</style>
