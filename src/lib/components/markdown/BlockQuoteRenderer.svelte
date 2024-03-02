<script lang="ts">
	export let raw: string;
	export const text: string = '';

	let lines = raw.split('>').slice(1);
	lines = lines.map((line) => line.trim());
</script>

<div
	class="relative bg-card-light dark:bg-card brightness-90 dark:brightness-75 rounded-r-xl text-primary dark:text-white text-lg md:text-xl
before:absolute before:h-full before:w-2 before:bg-accent-light before:dark:bg-accent"
>
	<p class="w-full lg:w-4/5 p-4 sm:p-6 leading-snug">
		{#each lines as line}
			{line}
			<br />
		{/each}
	</p>
</div>
