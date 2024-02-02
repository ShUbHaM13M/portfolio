import type { Tag } from "$lib/utils/types";

type WorkExperience = {
	company: string,
	designation: string,
	timeFrame: string,
	current: boolean,
	description: string,
	tags: Tag[],
};

export function parseWorkExperiences(frontmatter: any): WorkExperience {
	return {
		company: frontmatter.company,
		description: frontmatter.description,
		timeFrame: frontmatter.timeFrame,
		current: frontmatter.current,
		designation: frontmatter.designation,
		tags: frontmatter.technologies
	}
}
export default WorkExperience