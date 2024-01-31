<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte';
	import ProjectCard from './ProjectCard.svelte';
	import IconSoftwareDevelopement from '$lib/icons/IconSoftwareDevelopement.svelte';

	export let Hst: Hst;

	let props = {
		title: 'Stories.io - Story App',
		excerpt:
			"Stories.io is a React Native app that connect with an expressjs server, allows users to browse, create, change and delete their stories stores on a mongoDb database. Users can like and comments on other user's stories and also set their stories as private"
	};

	let imageUrl =
		'https://cdn.sanity.io/images/bj34pdbp/migration/bca4bfbc722f4acaceaece20a0ef957e9f18bb6e-2024x1012.png?w=1920&q=75&fit=clip&auto=format';
</script>

<Hst.Story title="Molecules/Project Card" layout={{ type: 'grid', width: 400 }}>
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={props.title} title="Title" />
		<Hst.Textarea bind:value={props.excerpt} title="Excerpt" />
		<Hst.Text bind:value={imageUrl} title="Image URL" />
	</svelte:fragment>

	<div style="padding: 12px;">
		<Hst.Variant title="Default">
			<ProjectCard
				links={[
					{
						href: 'https://www.github.com',
						icon: IconSoftwareDevelopement
					}
				]}
				{...props}
				{imageUrl}
			/>
		</Hst.Variant>

		<Hst.Variant title="No Image">
			<ProjectCard {...props} />
		</Hst.Variant>
	</div>
</Hst.Story>
