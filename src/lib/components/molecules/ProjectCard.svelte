<script lang="ts" module>
	import type { SvelteComponent } from 'svelte';
	export type Link = {
		href: string;
		icon: typeof SvelteComponent;
	};
</script>

<script lang="ts">
	import Image from '$lib/components/atoms/Image.svelte';

	interface Props {
		slug: string;
		imageUrl?: string | undefined;
		name?: string;
		excerpt?: string;
		link?: Link | undefined;
		containerClasses?: string | undefined;
	}

	let {
		slug,
		imageUrl = undefined,
		name = '',
		excerpt = '',
		link = undefined,
		containerClasses = undefined
	}: Props = $props();
</script>

<a href={`/${slug}`} class={`h-full block ${containerClasses}`}>
	<div
		class={`container project-card h-full flex flex-col gap-4 p-4 py-5 text-primary dark:text-white rounded-lg bg-card-light dark:bg-card transition-all ease-out duration-300 ${containerClasses}`}
	>
		{#if imageUrl}
			<Image
				class="project-card-image aspect-video w-full rounded-md object-cover object-top"
				src={imageUrl}
				alt={`Screenshot of ${name}`}
			/>
		{/if}
		<div class="flex justify-between items-center">
			<h3 class="font-medium text-2xl leading-6">{name}</h3>
			{#if link}
				<a href={link.href} target="_blank">
					<link.icon classes="h-7 w-7" />
				</a>
			{/if}
		</div>
		<p class="text-lg leading-tight line-clamp-3">
			{excerpt}
		</p>
	</div>
</a>

<style lang="postcss" scoped>
	.project-card {
		max-width: 400px;
	}
	.project-card-image {
		max-height: 200px;
		@apply object-cover;
	}
</style>
