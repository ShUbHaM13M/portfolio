<script lang="ts">
	import { marked } from 'marked';
	import SvelteMarkdown from 'svelte-markdown';

	export let content: string = '';
	const options = marked.defaults;

	const renderers = {} as any;
</script>

<SvelteMarkdown source={content} {renderers} {options} />
