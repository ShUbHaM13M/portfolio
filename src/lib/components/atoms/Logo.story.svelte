<!-- @migration-task Error while migrating Svelte code: Identifier 'Hst' has already been declared
https://svelte.dev/e/js_parse_error -->
<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte';
	import Logo from './Logo.svelte';

	export let Hst: Hst;
</script>

<Hst.Story title="Atoms/Logo" layout={{ type: 'single' }}>
	<Logo />
</Hst.Story>
