<script lang="ts">
	import { dev } from '$app/environment';
	import { HttpRegex } from '$lib/utils/regex';

	export let additionalClasses: string = '';

	export let src: string;
	export let alt: string;
	export let figcaption: string | undefined = undefined;
	export let lazy: boolean = true;

	export let formats: string[] = ['avif', 'webp', 'png'];
	export let widths: string[] | undefined = undefined;

	let fileName: string;
	let srcset: string | undefined;

	$: {
		fileName = src ? src.split('.')[0] : '';
		srcset = buildSrcSet();
	}

	function buildSrcSet() {
		if (dev || HttpRegex.test(src)) return;

		let srcset = '';

		if (widths) {
			for (let i = 0; i < widths.length; i++) {
				srcset += `${fileName}-${widths[i]}.${formats[0]} ${widths[i]}w`;

				if (i < widths.length - 1) {
					srcset += ', ';
				}
			}
		} else {
			for (let i = 0; i < formats.length; i++) {
				srcset += `${fileName}.${formats[i]}`;

				if (i < formats.length - 1) {
					srcset += ', ';
				}
			}
		}
		return srcset;
	}
</script>

{#if src}
	{#if figcaption}
		<figure class={additionalClasses} {...$$restProps}>
			<img
				class="rounded-xl"
				{srcset}
				{src}
				{alt}
				loading={lazy ? 'lazy' : 'eager'}
				decoding="async"
			/>
			<figcaption class="mt-4 text-center text-base text-subtitle">{@html figcaption}</figcaption>
		</figure>
	{:else}
		<img
			{srcset}
			{src}
			{alt}
			class={additionalClasses}
			loading={lazy ? 'lazy' : 'eager'}
			decoding="async"
			{...$$restProps}
		/>
	{/if}
{/if}

<style>
	img,
	figure {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
