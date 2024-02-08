<script lang="ts">
	import { marked } from 'marked';
	import SvelteMarkdown from 'svelte-markdown';
	import ComponentRenderer from '../markdown/ComponentRenderer.svelte';

	export let content: string = '';
	const options = marked.defaults;

	const renderers = {
		code: ComponentRenderer
	} as any;
</script>

<SvelteMarkdown source={content} {renderers} {options} />
