<script lang="ts">
	import Expertise from '$lib/components/organism/Expertise.svelte';
	import Main from '$lib/components/organism/Main.svelte';
	import Project from '$lib/components/organism/Project.svelte';
	import Work from '$lib/components/organism/Work.svelte';
	import Contact from '$lib/components/organism/Contact.svelte';
	import Blog from '$lib/components/organism/Blog.svelte';

	import type { Skill, WorkExperience, Blog as BlogType } from '$lib/utils/types';

	export let data: {
		skills: Skill[];
		workExperiences: WorkExperience[];
		blogs: BlogType[];
	};
	let { skills, workExperiences, blogs } = data;
</script>

<Main />
<Expertise {skills} />
<Project />
<Blog />
<Work {workExperiences} />
<Contact />
