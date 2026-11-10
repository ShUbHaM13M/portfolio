<script lang="ts">
	import type { Hst as HstType } from '@histoire/plugin-svelte';
	import BlogPostCard from './BlogPostCard.svelte';

	export let Hst: HstType;
</script>

<Hst.Story title="Molecules/Blog Post Card" layout={{ type: 'grid', width: 400 }}>
	<div style="padding: 12px;">
		<Hst.Variant title="Default">
			<BlogPostCard
				slug="blog-post"
				title="Blog Post"
				excerpt="This is a blog post"
			/>
		</Hst.Variant>

		<Hst.Variant title="No Image">
			<BlogPostCard
				slug="blog-post"
				title="Blog Post"
				excerpt="This is a blog post"
			/>
		</Hst.Variant>
	</div>
</Hst.Story>
