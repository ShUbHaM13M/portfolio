<script lang="ts">
	import type { Image } from '$lib/utils/types';
	export let slug: string;
	export let coverImage: Image | undefined = undefined;
	export let title: string;
	export let excerpt: string;
</script>

<a
	class="min-h-full flex-1 block rounded-lg overflow-hidden transition-shadow ease-out duration-300"
	href={`/${slug}`}
>
	<div
		class="container p-4 py-5 flex min-h-full flex-col gap-4 bg-card text-white pointer-events-none"
	>
		{#if coverImage}
			<img
				style="max-width: 350px"
				class="max-w-full w-full object-cover aspect-video rounded-md"
				src={coverImage.src}
				alt={title}
			/>
		{/if}
		<h3 class="text-2xl leading-6 font-medium">{title}</h3>
		<p class="text-lg leading-tight">{excerpt}</p>
	</div>
</a>

<style lang="postcss" scoped>
	a:hover,
	a:focus {
		box-shadow: 0 0 4px 8px theme('colors.accent' / 10%);
		outline: none;
	}
	.container {
		min-height: 200px;
		height: 100%;
	}
	@screen md {
		.container {
			min-height: 250px;
		}
	}
</style>
