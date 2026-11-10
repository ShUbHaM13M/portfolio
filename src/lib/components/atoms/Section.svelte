<!-- @migration-task Error while migrating Svelte code: This migration would change the name of a slot (description to description_1) making the component unusable -->
<script lang="ts">
	export let additionalClass: string = '';
	export let title: string = '';
	export let description: string = '';
</script>

<section {...$$restProps} class={`px-6 md:pl-20 pt-10 min-h-screen ${additionalClass}`}>
	{#if title}
		<h1 class="font-short-stack mt-2 text-primary dark:text-white text-4xl sm:text-6xl">{title}</h1>
	{/if}
	{#if $$slots.description}
		<slot name="description" />
	{:else if description}
		<h2 class="leading-6 sm:leading-10 text-subtitle text-lg md:text-2xl">
			{description}
		</h2>
	{/if}
	<slot />
</section>
