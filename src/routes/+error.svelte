<script>
	import Button from '$lib/components/atoms/Button.svelte';
	import Header from '$lib/components/organism/Header.svelte';
</script>

<Header />

<!-- TODO: Styling the error page -->
<main class="min-h-screen w-full grid place-items-center">
	<div class="flex flex-col gap-1 text-white">
		<h1>Error Occured</h1>
		<p>Seems like some unknown error happened</p>
		<Button href="/">Let's start over</Button>
	</div>
</main>
