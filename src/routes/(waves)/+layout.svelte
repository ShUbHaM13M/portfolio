<script>
	import Header from '$lib/components/organism/Header.svelte';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	const showMainContent = writable(true);

	setContext('showMainContent', showMainContent);
</script>

<svelte:head>
	<title>Shubham Maurya</title>
</svelte:head>

<main class="relative overflow-x-hidden">
	<Header />
	<slot />
</main>
