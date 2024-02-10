<script lang="ts">
	export let raw: string;
	export let text: string;

	let lines = raw.split('>').slice(1);
	lines = lines.map((line) => line.trim());
</script>

<div
	class="relative bg-[#213451] rounded-r-xl text-white text-base md:text-xl
before:absolute before:h-full before:w-2 before:bg-[#9A69FF]"
>
	<p class="w-full lg:w-4/5 p-6">
		{#each lines as line}
			{line}
			<br />
		{/each}
	</p>
</div>
