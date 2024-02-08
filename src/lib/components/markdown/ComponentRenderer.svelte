<script lang="ts">
	import Codeblock from '../molecules/Codeblock.svelte';

	const imports: any = {};

	export let lang: string;
	export let text: string;

	let componentName: string;
	let componentConfig: any;
	let componentChildren: any;
	let componentProps: any;

	let codeFilename: string;
	if (lang === 'sveltecomponent') {
		componentConfig = JSON.parse(text);
		componentName = componentConfig.component;
		componentChildren = componentConfig.props?.children;
		componentProps = componentConfig.props;
		delete componentProps.children;
	} else {
		// Pattern: ~filename example.js
		const match = text.match(/^~filename\s*(.*)/);
		if (match && match[1]) {
			codeFilename = match[1];
			text = text.replace(/^~filename.*(?:\n|$)/, '');
		}
	}
</script>

{#if lang === 'sveltecomponent' && componentName}
	{#await imports[componentName]() then module}
		<svelte:component this={module.default} ...componentProps>
			{#if componentChildren}
				{@html componentChildren}
			{/if}
		</svelte:component>
	{/await}
{:else}
	<Codeblock {lang} filename={codeFilename} code={text} />
{/if}
