import { WorkExperience } from "$lib/utils/types";


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