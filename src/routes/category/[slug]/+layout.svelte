<script lang="ts">
	import Header from '$lib/components/organism/Header.svelte';
</script>

<Header />
<main
	class="bg-checkered pt-[75px] pb-6 md:pt-px bg-light-white backdrop-brightness-50 dark:bg-primary dark:backdrop-brightness-100 bg-top"
>
	<slot />
</main>
