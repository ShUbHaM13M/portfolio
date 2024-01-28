<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte';
	import Button, { type Variant } from './Button.svelte';

	export let Hst: Hst;

	let props: {
		variant: Variant;
		href: string;
		target: '_blank';
	} = {
		variant: 'outlined',
		href: '',
		target: '_blank'
	};

	let text = 'This is a button';
</script>

<svelte:component this={Hst.Story} title="Atoms/Button" layout={{ type: 'grid', width: 400 }}>
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={text} title="Text" />
		<Hst.Select bind:value={props.variant} title="Variant" options={['filled', 'outlined']} />
		<Hst.Text bind:value={props.href} title="Href" />
	</svelte:fragment>
	<div style="padding: 12px;">
		<svelte:component this={Hst.Variant} title="No Icon">
			<Button {...props}>
				{text}
			</Button>
		</svelte:component>
	</div>
</svelte:component>
