<script lang="ts">
	import '$lib/themes/codeblock/frappe.css';
	import '$lib/themes/codeblock/github.css';
	import '$lib/themes/codeblock/slack.css';

	import IconCopy from '$lib/icons/IconCopy.svelte';
	import { codeblockTheme } from '$lib/stores/codeblock-theme';
	import codeHighlighter from '$lib/utils/codeHighlighter';

	export let filename: string | undefined = undefined;
	export let lang: string;
	export let code: string | undefined = undefined;

	let theme = $codeblockTheme;
	$: theme = $codeblockTheme;

	let copied = false;

	const changeCodeblockTheme = (theme: string) => codeblockTheme.set(theme);

	function onCopyClick() {
		if (code) {
			navigator.clipboard.writeText(code);
			copied = true;
			setTimeout(() => (copied = false), 2000);
		}
	}
</script>

<div class={`flex flex-col rounded-xl ${theme}`}>
	<div
		style="background-color: var(--color-titlebar)"
		class="flex justify-between py-2 rounded-t-xl px-4 md:px-6 items-center"
	>
		<div class="flex items-center gap-2.5">
			<div class="flex gap-1 md:flex">
				<button
					tabindex="-1"
					on:click={() => changeCodeblockTheme('catppuccin-frappe')}
					type="button"
					class="w-3 h-3 rounded-full bg-red-400 outline-none"
				></button>
				<button
					tabindex="-1"
					on:click={() => changeCodeblockTheme('github-dark')}
					type="button"
					class="w-3 h-3 rounded-full bg-yellow-400 outline-none"
				></button>
				<button
					tabindex="-1"
					on:click={() => changeCodeblockTheme('slack-dark')}
					type="button"
					class="w-3 h-3 rounded-full bg-green-400 outline-none"
				></button>
			</div>
			<div style="color: var(--color-titlebar-text)" class="text-subtitle">
				{#if filename}
					<span>{filename} · </span>
				{/if}
				<span class="capitalize">{lang}</span>
			</div>
		</div>
		<button class="copy-button" on:click={onCopyClick}>
			<IconCopy {copied} />
		</button>
	</div>
	<div class="code-block font-fira-code p-4 md:p-6 text-lg md:text-xl rounded-b-xl">
		{#if code}
			{#if lang}
				<!-- Some skeleton loading  -->
				{@html codeHighlighter.codeToHtml(code, {
					lang,
					theme,
					transformers: [
						{
							// @ts-ignore
							pre(node, hast) {
								// @ts-ignore
								this.addClassToHast(node, 'overflow-x-auto');
							}
						}
					]
				})}
			{:else}
				<pre>{code}</pre>
			{/if}
		{:else}
			<slot />
		{/if}
	</div>
</div>

<style lang="postcss">
	:global(.code-block code) {
		@apply font-fira-code;
	}
	:global(.code-block pre) {
		@apply focus-visible:outline-none;
	}
</style>
