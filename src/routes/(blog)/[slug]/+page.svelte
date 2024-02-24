<script lang="ts">
	import Tag from '$lib/components/atoms/Tag.svelte';
	import BlogUserProfile from '$lib/components/molecules/BlogUserProfile.svelte';
	import Markdown from '$lib/components/molecules/Markdown.svelte';
	import type { Blog } from '$lib/utils/types';
	export let data: { blog: Blog };
	$: ({ blog } = data);
</script>

{#key blog}
	{#if blog?.coverImage}
		<img
			role="presentation"
			class="cover-image w-full object-cover -z-10"
			src={blog.coverImage.src}
			alt={blog.coverImage.alt}
		/>
	{/if}
	<div
		class:has-cover-image={!!blog.coverImage}
		class="container flex flex-col mt-6 md:mt-28 lg:mt-32 md:bg-primary md:bg-opacity-10 md:dark:bg-header dark:bg-opacity-10 relative text-primary dark:text-white gap-6 md:gap-10
		p-6 rounded-t-xl md:mx-auto md:w-11/12 md:rounded-xl h-full
		backdrop-blur-md md:backdrop-blur-lg md:border md:border-white md:border-opacity-20"
	>
		<BlogUserProfile date={blog.date.toDateString()} readTime={blog.readTime} />
		<h1 class="leading-tight md:leading-none text-[28px] md:text-[42px] font-bold">
			{blog.title}
		</h1>
		{#if blog.tags.length}
			<div class="flex gap-2">
				{#each blog.tags as tag}
					<Tag label={tag.label} color={tag.accentColor} text={tag.textColor} showHash />
				{/each}
			</div>
		{/if}
		<div class="markdown-content flex flex-col gap-6 md:gap-10">
			<Markdown content={blog.content} />
		</div>
	</div>
{/key}

<style lang="postcss">
	.cover-image {
		max-height: 300px;
		height: 30vh;
	}
	@screen md {
		.cover-image {
			max-height: 30vh;
			height: 30vh;
		}
	}
	@screen lg {
		.cover-image {
			max-height: 60vh;
			height: 60vh;
		}
	}
	.container {
		max-width: 940px;
	}
	.container.has-cover-image {
		@apply -mt-6 md:-mt-16 dark:bg-slate-200 dark:bg-opacity-10;
	}
	:global(.markdown-content > *) {
		/* @apply mt-10; */
	}
	:global(.markdown-content > p) {
		@apply text-base md:text-2xl;
	}
	:global(.markdown-content > p + p) {
		@apply mt-0;
	}
</style>
