<script lang="ts">
	import Image from '$lib/components/atoms/Image.svelte';

	export let index: string = '';
	export let icon: string = '';
	export let title: string = '';
	export let description: string = '';
	export let tagBegin: string = '';
	export let tagEnd: string = '';

	export let containerClasses: string | undefined = undefined;
	export let descriptionClasses: string | undefined = undefined;
</script>

<div
	class={`skill-card relative text-primary dark:text-white flex flex-col flex-1 gap-4 
	p-6 sm:py-10 sm:pt-14 rounded-lg bg-card-light dark:bg-card
	hover:scale-105
	transition-transform ease-out duration-300 ${containerClasses}`}
>
	<span
		class="absolute right-4 top-0 font-bold text-7xl opacity-10 dark:opacity-5 pointer-events-none"
		role="presentation">{index}</span
	>
	<div class="flex flex-col sm:flex-row gap-2 md:gap-4">
		<Image
			class="skill-icon"
			src={icon}
			alt={`${title} icon`}
			formats={['avif', 'png', 'webp', 'svg']}
		/>
		<p class="font-medium text-2xl sm:text-3xl max-w-16 md:max-w-24 leading-8">{title}</p>
	</div>
	<div style="grid-template-columns: auto 1fr;" class="grid gap-4 items-center">
		<div
			role="presentation"
			class="tag pointer-events-none flex flex-col gap-1 h-full font-extrabold text-primary opacity-40 dark:opacity-20 dark:text-white transition-opacity ease-out duration-300"
		>
			<span>{tagBegin}</span>
			<div class="border h-full w-px border-dashed border-current border-opacity-50 ml-1"></div>
			<span>{tagEnd}</span>
		</div>
		<p class={`text-base py-7 sm:py-8 sm:text-xl leading-5 sm:leading-6 ${descriptionClasses}`}>
			{description}
		</p>
	</div>
</div>

<style lang="postcss">
	.tag * {
		@apply transition-colors ease-out duration-300;
	}
	.skill-card:hover .tag {
		& * {
			color: theme(colors.accent-light);
			border-color: theme(colors.accent-light);
		}
		opacity: 100%;
	}
	html[data-theme='dark'] .skill-card:hover .tag {
		& * {
			color: theme(colors.accent);
			border-color: theme(colors.accent);
		}
		opacity: 100%;
	}
</style>
