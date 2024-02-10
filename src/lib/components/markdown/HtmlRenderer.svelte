<script lang="ts">
	export let raw: string;

	const ATTRIBUTE_REGEX = /(\w+)\s*(?:=\s*["']([^"']*)["'])?/g;
	const attributes: { [key: string]: string } = {};

	function getAttributes() {
		const matches = [...raw.matchAll(ATTRIBUTE_REGEX)];

		matches.forEach((match) => {
			const [, attributeName, attributeValue] = match;
			attributes[attributeName] = attributeValue || '';
		});
	}
	getAttributes();
</script>

{#if raw.startsWith('<video')}
	<video
		width={attributes.width ? parseInt(attributes.width) : '100%'}
		height={attributes.height ? parseInt(attributes.height) : '100%'}
		controls={attributes.controls ? Boolean(attributes.controls) : true}
		muted={attributes.muted ? Boolean(attributes.muted) : true}
		class={`rounded-xl ${attributes.class || ''}`}
	>
		<source src={attributes.src} type={attributes.type || 'video/webm'} />
	</video>
{:else}
	{@html raw}
{/if}
