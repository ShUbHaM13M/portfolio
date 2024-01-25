<script lang="ts">
	export let slug: string;
	export let imageUrl: string | undefined = undefined;
	export let date: string;
	export let title: string;
	export let excerpt: string;
</script>

<a href={slug}>
	<div
		style="max-width: 350px"
		class="p-4 py-5 flex flex-col gap-4 border border-text dark:border-text-dark"
	>
		{#if imageUrl}
			<img
				style="max-width: 350px"
				class="max-w-full w-full object-cover aspect-video rounded-2xl"
				src={imageUrl}
				alt={title}
			/>
		{/if}
		<span class="opacity-40 text-sm">{date}</span>
		<h3 class="text-3xl font-bold">{title}</h3>
		<p class="text-xl">{excerpt}</p>
	</div>
</a>
