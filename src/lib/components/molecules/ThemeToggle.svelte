<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import IconLightMode from '$lib/icons/IconLightMode.svelte';
	import IconDarkMode from '$lib/icons/IconDarkMode.svelte';

	export let extraClasses: string = '';

	function toggleTheme() {
		if ($theme === 'light') {
			theme.set('dark');
		} else if ($theme === 'dark') {
			theme.set(null);
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

<button class={`theme-toggle ${extraClasses}`} type="button" on:click={toggleTheme}>
	<!--TODO: Icon animation? and auto  -->
	{#if $theme === 'light'}
		<IconLightMode classes="size-8" />
	{:else}
		<IconDarkMode classes="size-8" />
	{/if}
</button>
