<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte';
	import BlogPostCard from './BlogPostCard.svelte';

	export let Hst: Hst;
</script>

<Hst.Story title="Molecules/Blog Post Card" layout={{ type: 'grid', width: 400 }}>
	<div style="padding: 12px;">
		<Hst.Variant title="Default">
			<BlogPostCard
				slug="blog-post"
				title="Blog Post"
				excerpt="This is a blog post"
				imageUrl="https://cdn.sanity.io/images/bj34pdbp/migration/bca4bfbc722f4acaceaece20a0ef957e9f18bb6e-2024x1012.png?w=1920&q=75&fit=clip&auto=format"
				date="Nov 25, 2024"
			/>
		</Hst.Variant>

		<Hst.Variant title="No Image">
			<BlogPostCard
				slug="blog-post"
				title="Blog Post"
				excerpt="This is a blog post"
				date="Nov 25, 2024"
			/>
		</Hst.Variant>
	</div>
</Hst.Story>
