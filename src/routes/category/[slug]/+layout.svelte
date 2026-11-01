<script lang="ts">
	import Header from '$lib/components/organism/Header.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<svelte:head>
	<title>Shubham Maurya</title>
</svelte:head>

<Header />
<main
	class="bg-checkered pt-[75px] pb-6 md:pt-px bg-light-white backdrop-brightness-50 dark:bg-primary dark:backdrop-brightness-100 bg-top"
>
	{@render children?.()}
</main>
