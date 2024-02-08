<script lang="ts">
	import IconCopy from '$lib/icons/IconCopy.svelte';
	import Prism from 'prismjs';

	import 'prismjs/components/prism-json';
	import 'prismjs/components/prism-css';
	import 'prismjs/components/prism-typescript';
	import 'prismjs/components/prism-bash';
	import 'prismjs/components/prism-javascript';
	import 'prismjs/components/prism-markdown';

	import 'prism-svelte';

	Prism.manual = true;
	const prism = Prism as any;

	export let filename: string | undefined = undefined;
	export let lang: string;
	export let code: string | undefined = undefined;

	function onCopyClick() {
		// TODO: Indicator when copied to clipboard
		if (code) navigator.clipboard.writeText(code);
	}
</script>

<div class="flex flex-col rounded-xl bg-[#12223A]">
	<div class="flex justify-between py-2 rounded-t-xl px-4 md:px-6 items-center bg-primary">
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
			<IconCopy />
		</button>
	</div>
	<div class="code-block p-4 md:p-6 text-base md:text-xl">
		{#if code}
			{#if lang}
				<pre
					style="--scrollbar-bg-color: transparent"
					class={`language-${lang} overflow-x-auto font-fira-code`}>{@html Prism.highlight(
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
