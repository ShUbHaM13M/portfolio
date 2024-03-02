<script lang="ts">
	import IconCheck from '$lib/icons/IconCheck.svelte';

	type ListItem = {
		text: string;
		checked: boolean;
		task: boolean;
		raw: string;
	};

	export let ordered: boolean = false;
	export let items: ListItem[] = [];
</script>

<svelte:element
	this={ordered ? 'ol' : 'ul'}
	class={`text-current text-lg md:text-xl ${ordered ? 'ordered-list' : 'flex flex-col gap-1'}`}
>
	{#each items as item}
		<li class="flex gap-1.5 md:gap-2.5 items-start">
			{#if item.task}
				<IconCheck checked={item.checked} classes="mt-1" />
			{:else if !ordered}
				<div
					style="min-height: 0.75rem; min-width: 0.75rem"
					class="size-3 mt-1.5 rounded-full bg-accent-light dark:bg-accent"
				></div>
			{/if}
			{item.text}
		</li>
	{/each}
</svelte:element>

<style lang="postcss" scoped>
	.ordered-list {
		display: list-item;
		list-style-position: inside;
	}
	.ordered-list li {
		display: list-item;
		list-style-type: decimal;
		@apply marker:text-xl;
	}
</style>
