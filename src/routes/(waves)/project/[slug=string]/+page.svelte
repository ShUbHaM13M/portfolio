<script lang="ts">
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	import Image from '$lib/components/atoms/Image.svelte';
	import Tag from '$lib/components/atoms/Tag.svelte';
	import Markdown from '$lib/components/molecules/Markdown.svelte';
	import type { Project } from '$lib/utils/types';
	import IconGithub from '$lib/icons/IconGithub.svelte';
	import IconShare from '$lib/icons/IconShare.svelte';
	import { siteBaseUrl } from '$lib/data/meta';

	export let data: { project: Project };
	$: ({ project } = data);

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
		const shareableData = {
			title: project.name,
			text: project.description,
			url: `${siteBaseUrl}/project/${project.slug}`
		};

		if (!Object.hasOwn(navigator, 'canShare')) return;

		canShare = navigator.canShare(shareableData);
		if (canShare) {
			shareData = shareableData;
		}
	});
</script>

{#key project}
	<div
		class="relative container flex flex-col mt-6 md:mt-28 lg:mt-32
		md:bg-primary md:bg-opacity-10 md:dark:bg-header dark:bg-opacity-10
		text-primary dark:text-white gap-6
		p-6 rounded-t-xl md:mx-auto md:w-11/12 md:rounded-xl h-full
		backdrop-blur-md md:backdrop-blur-lg md:border md:border-white md:border-opacity-20"
	>
		<div class="flex flex-col sm:flex-row gap-2 justify-between overflow-hidden">
			<h1 class="leading-tight md:leading-snug text-[28px] md:text-[42px] font-bold">
				{project.name}
			</h1>
			<div class="flex gap-2 items-center w-full sm:w-fit">
				{#if project.githubLink}
					<a
						transition:slide={{ axis: 'x', duration: 250 }}
						target="_blank"
						rel="noopener noreferrer"
						class="block"
						href={project.githubLink}
					>
						<IconGithub
							classes="text-primary hover:text-accent-light dark:text-white dark:hover:text-accent transition-all ease-out duration-300 size-8 opacity-100"
						/>
					</a>
				{/if}
				{#if canShare}
					<button
						id="shareButton"
						bind:this={shareButton}
						transition:slide={{ axis: 'x', duration: 500 }}
						type="button"
						class="inline-block"
						title={`Share ${project.name}`}
					>
						<IconShare
							classes="text-primary hover:text-accent-light dark:text-white dark:hover:text-accent transition-all ease-out duration-300 size-8 opacity-100"
						/>
					</button>
				{/if}
			</div>
		</div>
		{#if project.technologies?.length}
			<div class="flex flex-wrap gap-2">
				{#each project.technologies as tag}
					<Tag label={tag.label[0]} color={tag.accentColor} highlightOnHover={false} />
				{/each}
			</div>
		{/if}

		{#if project.images}
			<div class="flex gap-4 align-center overflow-x-auto w-full">
				{#each project.images as image, index}
					<div class="image-container w-fit sm:w-80 h-fit sm:h-96 pb-4 sm:pb-0">
						<!-- TODO: Add support for image alt -->
						<Image
							src={image}
							alt=""
							additionalClasses="h-auto max-w-full w-full object-contain rounded-lg object-top"
						/>
					</div>
				{/each}
			</div>
		{/if}

		{#if project.content}
			<div class="markdown-content flex flex-col gap-6">
				<Markdown content={project.content} />
			</div>
		{/if}
	</div>
{/key}

<style lang="postcss">
	.image-container::-webkit-scrollbar-track {
		background-color: transparent;
	}
	.image-container {
		min-width: 90%;
	}
	:global(.image-container img) {
		max-height: 60svh;
	}
	/* TODO: Fix issues when rendering images in desktop */
	@screen sm {
		.image-container {
			min-width: 40%;
		}
		:global(.image-container img) {
			max-height: 100%;
		}
	}
</style>
