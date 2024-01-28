<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte';
	import Hamburger from './Hamburger.svelte';

	export let Hst: Hst;
</script>

<Hst.Story title="Molecules/Hamburger" layout={{ type: 'single' }}>
	<div style="padding: 12px;">
		<Hst.Variant title="Default">
			<Hamburger
				links={[
					{ href: '/', text: 'Home' },
					{ href: '/about', text: 'About' }
				]}
			/>
		</Hst.Variant>
	</div>
</Hst.Story>
