<script lang="ts">
	import Image from '../atoms/Image.svelte';

	export let images: string[] = [];
</script>

<div class="flex gap-4 size-72">
	{#each images as image}
		<Image src={image} alt="" additionalClasses="rounded-lg" />
	{/each}
</div>
