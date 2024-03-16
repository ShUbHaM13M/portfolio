<script lang="ts">
	import '../app.css';
	import Cursor from '$lib/components/atoms/Cursor.svelte';
	import { afterNavigate, beforeNavigate, onNavigate } from '$app/navigation';
	import { onMount } from 'svelte';
	import { swatch } from '$lib/stores/swatch';
	import { navigating } from '$app/stores';
	import Loader from '$lib/components/atoms/Loader.svelte';
	import ScrollToTop from '$lib/components/atoms/ScrollToTop.svelte';

	let root: HTMLElement;
	onMount(() => {
		root = document.getElementsByTagName('html')[0];
		root.classList.add('smooth-scroll');
	});

	beforeNavigate(() => {
		swatch.set(null);
		root.classList.remove('smooth-scroll');
	});

	afterNavigate(() => {
		root.classList.add('smooth-scroll');
	});

	onNavigate((navigation) => {
		// @ts-ignore
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			// @ts-ignore
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<slot />

<Cursor />
<ScrollToTop />

{#if $navigating}
	<Loader />
{/if}
