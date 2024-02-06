<script lang="ts">
	export let readTime: number = 0;
	export let date: string = '';
</script>

<div class="flex gap-3 md:gap-4 items-center text-white">
	<img class="h-12 md:h-14 w-12 md:w-14 rounded-full" src="/favicon.svg" alt="Shubham Maurya" />
	<div class="flex flex-col md:gap-1">
		<p class="font-medium text-lg md:text-xl">Shubham Maurya</p>
		<p class="text-sm md:text-base text-subtitle">{readTime} min read · {date}</p>
	</div>
</div>
