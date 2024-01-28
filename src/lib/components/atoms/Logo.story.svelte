<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte';
	import Logo from './Logo.svelte';

	export let Hst: Hst;
</script>

<Hst.Story title="Atoms/Logo" layout={{ type: 'single' }}>
	<Logo />
</Hst.Story>
