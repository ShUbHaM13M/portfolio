<script lang="ts">
	export let data: { slug: string };
	$: console.log(data.slug);
</script>

<h1 class="text-white">Category: {data.slug}</h1>
