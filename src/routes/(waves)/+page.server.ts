import { getBlogs } from "$lib/data/blogs/api";
import { getSkills } from "$lib/data/skills/api";
import { getWorkExperiences } from "$lib/data/work-experiences/api";

export async function load() {
	const skills = await getSkills();
	const workExperiences = await getWorkExperiences();
	const blogs = await getBlogs()
	return {
		skills,
		workExperiences,
		blogs
	}
}