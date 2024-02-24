<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import IconLightMode from '$lib/icons/IconLightMode.svelte';
	import IconDarkMode from '$lib/icons/IconDarkMode.svelte';

	function toggleTheme() {
		if ($theme === 'light') {
			theme.set('dark');
		} else {
			theme.set('light');
		}
	}
</script>

<noscript>
	<style>
		.theme-toggle {
			display: none !important;
		}
	</style>
</noscript>

<button class="theme-toggle" type="button" on:click={toggleTheme}>
	{#if $theme === 'light'}
		<IconLightMode classes="size-8" />
	{:else}
		<IconDarkMode classes="size-8" />
	{/if}
</button>
