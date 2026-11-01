<script module lang="ts">
	export type Variant = 'filled' | 'outlined';
</script>

<script lang="ts">
	import { createBubbler } from 'svelte/legacy';

	const bubble = createBubbler();
	
	interface Props {
		variant?: Variant;
		additionalClass?: string | undefined;
		href?: string | undefined;
		target?: '' | '_blank';
		// TODO: Update based on external link
		rel?: string;
		icon?: import('svelte').Snippet;
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let {
		variant = 'outlined',
		additionalClass = undefined,
		href = undefined,
		target = '',
		rel = 'noopener noreferrer',
		icon,
		children,
		...rest
	}: Props = $props();
	let tag = $derived(href ? 'a' : 'button');
	let linkProps = $derived({
		href,
		target,
		rel
	});
</script>

<svelte:element
	this={tag}
	{...linkProps}
	role="button"
	tabindex="0"
	data-sveltekit-preload-data="hover"
	onclick={bubble('click')}
	class={`${variant} px-4 w-fit py-3 font-medium text-xl rounded-md transition-colors ease-out duration-300 ${additionalClass}`}
	{...rest}
>
	{#if icon}
		<div class="icon">
			{@render icon?.()}
		</div>
	{/if}
	{@render children?.()}
</svelte:element>

<style lang="postcss" scoped>
	.filled {
		@apply bg-accent-light dark:bg-accent text-white dark:text-primary;
	}
	.outlined {
		@apply text-primary dark:text-white bg-accent-light dark:bg-accent bg-opacity-30 dark:bg-opacity-30 hover:bg-opacity-40 backdrop-blur-md border-2 border-accent-light dark:border-accent border-opacity-20 dark:border-opacity-20
		focus:outline-none dark:focus-visible:bg-accent focus-visible:bg-accent-light;
	}
</style>
