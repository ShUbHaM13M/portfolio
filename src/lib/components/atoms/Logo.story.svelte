<script lang="ts">
	import type { Hst as HstType } from '@histoire/plugin-svelte';
	import Logo from './Logo.svelte';

	export let Hst: HstType;
</script>

<Hst.Story title="Atoms/Logo" layout={{ type: 'single' }}>
	<Logo />
</Hst.Story>
