<script lang="ts">
	import Image from '$lib/components/atoms/Image.svelte';
	export let readTime: number = 0;
	export let date: string = '';
</script>

<div class="flex gap-3 md:gap-4 items-center text-primary dark:text-white">
	<div class="bg-primary bg-opacity-40 dark:bg-white rounded-full overflow-hidden">
		<Image
			title="Shubham Maurya - Portrait made by Luo"
			class="size-12 md:size-14 aspect-square"
			src="/images/shubham.png"
			alt="Shubham Maurya - Portrait made by Luo"
			formats={['avif', 'png', 'webp', 'svg']}
		/>
	</div>
	<div class="flex flex-col md:gap-1">
		<p class="font-medium text-lg md:text-xl">Shubham Maurya</p>
		<p class="text-sm md:text-base text-subtitle">{readTime} min read · {date}</p>
	</div>
</div>
