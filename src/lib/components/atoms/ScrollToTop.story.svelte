<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte';
	import ScrollToTop from './ScrollToTop.svelte';

	export let Hst: Hst;
</script>

<svelte:component this={Hst.Story} title="Atoms/Button" layout={{ type: 'grid', width: 400 }}>
	<div style="padding: 12px;">
		<svelte:component this={Hst.Variant}>
			<ScrollToTop />
		</svelte:component>
	</div>
</svelte:component>
