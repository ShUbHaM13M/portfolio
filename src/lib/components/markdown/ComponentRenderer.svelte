<script lang="ts">
	import Codeblock from '../molecules/Codeblock.svelte';

	const imports: any = {};

	interface Props {
		lang: string;
		text: string;
	}

	let { lang, text = $bindable() }: Props = $props();

	let componentName: string | undefined = $state();
	let componentConfig = $derived(
	  lang === "sveltecomponent" ? JSON.parse(text) : undefined
	);
	let componentChildren: any = $state();
	let componentProps = $derived.by(() => {
	    if(!componentConfig?.props) return {};
		const {children, ...props} = componentConfig.props;
		return props;
	});

	let codeFilename = $derived.by(() => {
	    if (lang === "sveltecomponent") return undefined;
		// Pattern: ~filename example.js
		const match = text.match(/^~filename\s*(.*)/);
		return match?.[1] || undefined;
	});

	let code = $derived.by(() => {
	    if (lang === "sveltecomponent") return text;
		return text.replace(/^~filename.*(?:\n|$)/, '')
	})
</script>

{#if lang === 'sveltecomponent' && componentName}
	{#await imports[componentName]() then module}
		<module.default {...componentProps}>
			{#if componentChildren}
				{@html componentChildren}
			{/if}
		</module.default>
	{/await}
{:else}
	<Codeblock {lang} filename={codeFilename} {code} />
{/if}
