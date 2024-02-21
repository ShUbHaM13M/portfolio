<script lang="ts">
	import Expertise from '$lib/components/organism/Expertise.svelte';
	import Main from '$lib/components/organism/Main.svelte';
	import Project from '$lib/components/organism/Project.svelte';
	import Work from '$lib/components/organism/Work.svelte';
	import Contact from '$lib/components/organism/Contact.svelte';
	import RecentBlog from '$lib/components/organism/RecentBlogs.svelte';

	import type {
		Skill,
		WorkExperience,
		Blog as BlogType,
		Project as ProjectType
	} from '$lib/utils/types';

	export let data: {
		skills: Skill[];
		workExperiences: WorkExperience[];
		blogs: BlogType[];
		projects: ProjectType[];
	};
	let { skills, workExperiences, blogs, projects } = data;
</script>

<Main />
<Expertise {skills} />
<Project {projects} />
<RecentBlog {blogs} />
<Work {workExperiences} />
<Contact />
