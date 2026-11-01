<script lang="ts">
	import Codeblock from '../molecules/Codeblock.svelte';

	const imports: any = {};

	interface Props {
		lang: string;
		text: string;
	}

	let { lang, text = $bindable() }: Props = $props();

	let componentName: string = $state();
	let componentConfig: any;
	let componentChildren: any = $state();
	let componentProps: any;

	let codeFilename: string = $state();
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
		<module.default ...componentProps>
			{#if componentChildren}
				{@html componentChildren}
			{/if}
		</module.default>
	{/await}
{:else}
	<Codeblock {lang} filename={codeFilename} code={text} />
{/if}
