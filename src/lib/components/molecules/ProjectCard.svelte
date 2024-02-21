<script lang="ts" context="module">
	import type { SvelteComponent } from 'svelte';
	import type { CustomTag } from '$lib/utils/types';
	export type Link = {
		href: string;
		icon: typeof SvelteComponent;
	};
</script>

<script lang="ts">
	import Tag from '../atoms/Tag.svelte';

	export let imageUrl: string | undefined = undefined;
	export let name: string = '';
	export let excerpt: string = '';
	export let link: Link | undefined = undefined;

	export let containerClasses: string | undefined = undefined;
	export let tags: CustomTag[] = [];
</script>

<div
	class={`container project-card flex flex-col gap-4 p-4 py-5 text-white rounded-lg bg-card transition-all ease-out duration-300 ${containerClasses}`}
>
	{#if imageUrl}
		<img
			class="project-card-image aspect-video w-full rounded-md"
			src={imageUrl}
			alt={`Screenshot of ${name}`}
		/>
	{/if}
	<div class="flex justify-between items-center">
		<h3 class="font-medium text-2xl leading-6">{name}</h3>
		{#if link}
			<a href={link.href} target="_blank">
				<svelte:component this={link.icon} classes="h-7 w-7" />
			</a>
		{/if}
	</div>
	<p class="text-lg leading-tight line-clamp-3">
		{excerpt}
	</p>
	{#if tags}
		<div class="flex flex-wrap gap-2">
			{#each tags.slice(0, 3) as tag}
				<Tag
					label={tag.label}
					text={tag.textColor}
					color={tag.accentColor}
					highlightOnHover={false}
				/>
			{/each}
		</div>
	{/if}
</div>

<style lang="postcss" scoped>
	.project-card {
		max-width: 400px;
	}
	.project-card-image {
		max-height: 200px;
		@apply object-cover;
	}
</style>
