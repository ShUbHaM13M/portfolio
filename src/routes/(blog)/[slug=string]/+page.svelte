<script lang="ts">
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import { siteBaseUrl } from '$lib/data/meta';

	import Image from '$lib/components/atoms/Image.svelte';
	import Tag from '$lib/components/atoms/Tag.svelte';
	import BlogUserProfile from '$lib/components/molecules/BlogUserProfile.svelte';
	import Markdown from '$lib/components/molecules/Markdown.svelte';
	import type { Blog } from '$lib/utils/types';
	import IconShare from '$lib/icons/IconShare.svelte';
	export let data: { blog: Blog };
	$: ({ blog } = data);

	let shareButton: HTMLButtonElement | null = null;
	let canShare: boolean = false;
	let shareData: ShareData | null = null;

	async function onShareClick() {
		await navigator.share(shareData!);
	}

	$: if (canShare) {
		const timeout = setTimeout(() => {
			shareButton?.addEventListener('click', onShareClick);
		}, 510);
		() => clearTimeout(timeout);
	}

	onMount(() => {
		const shareableData: ShareData = {
			title: blog.title,
			text: blog.excerpt,
			url: `${siteBaseUrl}/${blog.slug}`
		};

		if (!Object.hasOwn(navigator, 'canShare')) return;
		
		canShare = navigator?.canShare(shareableData);
		if (canShare) {
			shareData = shareableData;
		}
	});
</script>

{#key blog}
	{#if blog?.coverImage}
		<Image
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

		<div class="flex flex-col sm:flex-row gap-2 items-baseline justify-between overflow-hidden">
			<h1 class="leading-tight md:leading-none text-[28px] md:text-[42px] font-bold">
				{blog.title}
			</h1>

			{#if canShare}
				<button
					id="shareButton"
					bind:this={shareButton}
					transition:slide={{ axis: 'x', duration: 350 }}
					type="button"
					class="inline-block"
					title={`Share ${blog.title}`}
				>
					<IconShare
						classes="text-primary hover:text-accent-light dark:text-white dark:hover:text-accent transition-all ease-out duration-300 size-8 opacity-100"
					/>
				</button>
			{/if}
		</div>
		{#if blog.tags.length}
			<div class="flex flex-wrap gap-2">
				{#each blog.tags as tag}
					<Tag label={tag.label[0]} color={tag.accentColor} showHash />
				{/each}
			</div>
		{/if}
		<div class="markdown-content flex flex-col gap-6">
			<Markdown content={blog.content} />
		</div>
	</div>
{/key}

<style lang="postcss">
	:global(.cover-image) {
		max-height: 300px;
		height: 30vh;
	}
	@screen md {
		:global(.cover-image) {
			max-height: 30vh;
			height: 30vh;
		}
	}
	@screen lg {
		:global(.cover-image) {
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
</style>
