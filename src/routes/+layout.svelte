<script>
	import Header from '$lib/components/organism/Header.svelte';
	import '../app.css';
</script>

<svelte:head>
	<title>Shubham Maurya</title>	
</svelte:head>

<main class="relative overflow-x-hidden">
	<Header />
	<slot />
</main>
