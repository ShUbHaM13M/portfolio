<script lang="ts">
	import type { SvelteComponent } from 'svelte';

	export let index: string = '';
	export let icon: typeof SvelteComponent;
	export let title: string = '';
	export let description: string = '';
	export let tagBegin: string = '';
	export let tagEnd: string = '';

	export let containerClasses: string | undefined = undefined;
	export let descriptionClasses: string | undefined = undefined;
</script>

<div
	class={`relative text-white flex flex-col flex-1 gap-4 
	p-6 sm:py-10 sm:pt-14 rounded-lg bg-[#2D3139] 
	hover:shadow-xl hover:shadow-neutral-950
	transition-shadow ease-out duration-300
	${containerClasses}`}
>
	<span
		class="absolute right-4 top-0 font-bold text-7xl opacity-5 pointer-events-none"
		role="presentation">{index}</span
	>
	<div class="flex flex-col sm:flex-row gap-2 md:gap-4">
		<svelte:component this={icon} />
		<p class="font-medium text-2xl sm:text-3xl max-w-16 md:max-w-24 leading-8">{title}</p>
	</div>
	<div style="grid-template-columns: auto 1fr;" class="grid gap-4 items-center">
		<div
			role="presentation"
			class="pointer-events-none flex flex-col gap-1 h-full font-extrabold opacity-20"
		>
			<span>{tagBegin}</span>
			<div class="border h-full w-px border-dashed border-white border-opacity-50 ml-1"></div>
			<span>{tagEnd}</span>
		</div>
		<p class={`text-base py-7 sm:py-8 sm:text-xl leading-5 sm:leading-6 ${descriptionClasses}`}>
			{description}
		</p>
	</div>
</div>
