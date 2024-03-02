<script lang="ts">
	import IconCopy from '$lib/icons/IconCopy.svelte';
	import Prism from 'prismjs';

	import 'prismjs/components/prism-json';
	import 'prismjs/components/prism-css';
	import 'prismjs/components/prism-typescript';
	import 'prismjs/components/prism-bash';
	import 'prismjs/components/prism-javascript';
	import 'prismjs/components/prism-markdown';
	import 'prismjs/components/prism-rust';
	import 'prismjs/components/prism-c';
	import 'prismjs/components/prism-dart';

	import 'prism-svelte';
	import type { CodeBlockTheme } from '$lib/utils/types';

	Prism.manual = true;
	const prism = Prism as any;

	export let filename: string | undefined = undefined;
	export let lang: string;
	export let code: string | undefined = undefined;
	export let theme: CodeBlockTheme = 'frappe';

	let copied = false;

	function onCopyClick() {
		if (code) {
			navigator.clipboard.writeText(code);
			copied = true;
		}
	}
	$: if (copied) {
		setTimeout(() => (copied = false), 2000);
	}
</script>

<div class={`flex flex-col rounded-xl ${theme}`}>
	<div
		style="background-color: var(--color-titlebar)"
		class="flex justify-between py-2 rounded-t-xl px-4 md:px-6 items-center"
	>
		<div class="flex items-center gap-2.5">
			<div class="flex gap-1 md:flex">
				<div class="w-3 h-3 rounded-full bg-red-400"></div>
				<div class="w-3 h-3 rounded-full bg-yellow-400"></div>
				<div class="w-3 h-3 rounded-full bg-green-400"></div>
			</div>
			<div class="text-subtitle">
				{#if filename}
					<span>{filename} · </span>
				{/if}
				<span class="capitalize">{lang}</span>
			</div>
		</div>
		<button on:click={onCopyClick}>
			<IconCopy {copied} />
		</button>
	</div>
	<div class="code-block p-4 md:p-6 text-base md:text-lg rounded-b-xl">
		{#if code}
			{#if lang}
				<pre class={`language-${lang} overflow-x-auto font-fira-code`}>{@html Prism.highlight(
						code,
						prism.languages[lang],
						lang
					)}
				</pre>
			{:else}
				<pre>{code}</pre>
			{/if}
		{:else}
			<slot />
		{/if}
	</div>
</div>
