<script lang="ts">
	import { run } from 'svelte/legacy';

	import { dev } from '$app/environment';
	import { HttpRegex } from '$lib/utils/regex';



	interface Props {
		additionalClasses?: string;
		src: string;
		alt: string;
		figcaption?: string | undefined;
		lazy?: boolean;
		formats?: string[];
		widths?: string[] | undefined;
		[key: string]: any
	}

	let {
		additionalClasses = '',
		src,
		alt,
		figcaption = undefined,
		lazy = true,
		formats = ['avif', 'webp', 'png'],
		widths = undefined,
		...rest
	}: Props = $props();

	let fileName: string | undefined = $state();
	let srcset: string | undefined = $state();


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
	run(() => {
		fileName = src ? src.split('.')[0] : '';
		srcset = buildSrcSet();
	});
</script>

{#if src}
	{#if figcaption}
		<figure class={`w-full h-full object-cover ${additionalClasses}`} {...rest}>
			<img
				class="mx-auto rounded-xl"
				{srcset}
				{src}
				{alt}
				loading={lazy ? 'lazy' : 'eager'}
				decoding="async"
			/>
			<figcaption class="mt-4 text-center text-base text-current">{@html figcaption}</figcaption>
		</figure>
	{:else}
		<img
			{srcset}
			{src}
			{alt}
			class={`w-full h-full object-cover ${additionalClasses}`}
			loading={lazy ? 'lazy' : 'eager'}
			decoding="async"
			{...rest}
		/>
	{/if}
{/if}
