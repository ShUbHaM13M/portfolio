<script lang="ts">
	import { marked } from 'marked';
	import SvelteMarkdown from 'svelte-markdown';
	import ComponentRenderer from '../markdown/ComponentRenderer.svelte';
	import HeadingRenderer from '../markdown/HeadingRenderer.svelte';
	import ImageRenderer from '../markdown/ImageRenderer.svelte';
	import HtmlRenderer from '../markdown/HtmlRenderer.svelte';
	import HrRenderer from '../markdown/HrRenderer.svelte';
	import BlockQuoteRenderer from '../markdown/BlockQuoteRenderer.svelte';
	import LinkRenderer from '../markdown/LinkRenderer.svelte';
	import ListRenderer from '../markdown/ListRenderer.svelte';

	export let content: string = '';
	const options = {
		...marked.defaults,
		mangle: false
	};

	const renderers = {
		code: ComponentRenderer,
		heading: HeadingRenderer,
		image: ImageRenderer,
		html: HtmlRenderer,
		hr: HrRenderer,
		blockquote: BlockQuoteRenderer,
		link: LinkRenderer,
		list: ListRenderer
	} as any;
</script>

<SvelteMarkdown source={content} {renderers} {options} />
