<script>
	import Button from '$lib/components/atoms/Button.svelte';
	import Section from '$lib/components/atoms/Section.svelte';
	import Resume from '$lib/components/organism/Resume.svelte';

	import IconDarkMode from '$lib/icons/IconDarkMode.svelte';
	import IconLightMode from '$lib/icons/IconLightMode.svelte';

	let theme = 'dark';

	function onThemeButtonClick() {
		theme = theme === 'dark' ? 'light' : 'dark';
	}
</script>

<Section additionalClass="pt-20 pb-10 flex justify-center pl-0 bg-card">
	<div style="width: 900px;" class="flex flex-col mt-10 gap-4">
		<div class="flex gap-4 items-center mx-auto">
			<Button variant="filled">Download as PDF</Button>
			<button on:click={onThemeButtonClick}>
				{#if theme === 'dark'}
					<IconDarkMode classes="w-12 h-12" />
				{:else}
					<IconLightMode classes="w-12 h-12" />
				{/if}
			</button>
		</div>
		<Resume {theme} />
	</div>
</Section>
