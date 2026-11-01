<!-- @migration-task Error while migrating Svelte code: Identifier 'Hst' has already been declared
https://svelte.dev/e/js_parse_error -->
<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte';
	import Header from './Header.svelte';

	export let Hst: Hst;
</script>

<svelte:component this={Hst.Story} title="Organism/Header" layout={{ type: 'single' }}>
	<Header />
</svelte:component>
