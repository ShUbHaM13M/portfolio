<script lang="ts">
	import type { Hst as HstType } from '@histoire/plugin-svelte';
	import Header from './Header.svelte';

	export let Hst: HstType;
</script>

<svelte:component this={Hst.Story} title="Organism/Header" layout={{ type: 'single' }}>
	<Header />
</svelte:component>
