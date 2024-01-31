<script context="module" lang="ts">
	export type Variant = 'filled' | 'outlined';
</script>

<script lang="ts">
	export let variant: Variant = 'outlined';
	export let additionalClass: string | undefined = undefined;
	export let href: string | undefined = undefined;
	export let target: '' | '_blank' = '';
	// TODO: Update based on external link
	export let rel = 'noopener noreferrer';
	$: tag = href ? 'a' : 'button';
	$: linkProps = {
		href,
		target,
		rel
	};
</script>

<svelte:element
	this={tag}
	{...linkProps}
	role="button"
	tabindex="0"
	data-sveltekit-preload-data
	on:click
	class={`${variant} px-4 w-fit py-3 mt-6 font-medium text-xl rounded-md transition-colors ease-out duration-300 ${additionalClass}`}
	{...$$restProps}
>
	{#if $$slots['icon']}
		<div class="icon">
			<slot name="icon" />
		</div>
	{/if}
	<slot />
</svelte:element>

<style lang="postcss" scoped>
	.filled {
		@apply bg-accent text-primary;
	}
	.outlined {
		outline: 1px solid theme(colors.accent);
		@apply text-accent hover:bg-accent focus-visible:bg-accent hover:text-primary focus-visible:text-primary;
	}
</style>
