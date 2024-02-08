<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte';
	import Code from './Codeblock.svelte';

	export let Hst: Hst;

	let props = {
		filename: 'types.ts',
		lang: 'typescript',
		code: `interface CreateFormState {
	id: string;
	title: string;
	description: string;
	questions: Question[];
}`
	};
</script>

<svelte:component this={Hst.Story} title="Molecules/Codeblock" layout={{ type: 'single' }}>
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={props.filename} title="Filename" />
		<Hst.Select
			bind:value={props.lang}
			title="Language"
			options={['typescript', 'javascript', 'bash', 'css', 'json']}
		/>
		<Hst.Textarea bind:value={props.code} title="Code" />
	</svelte:fragment>
	<div style="padding: 12px;">
		<svelte:component this={Hst.Variant}>
			<Code {...props} />
		</svelte:component>
	</div>
</svelte:component>
