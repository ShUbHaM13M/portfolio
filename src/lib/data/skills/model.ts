import type { Skill } from '$lib/utils/types';

export const parseSkills = (frontmatter: any): Skill => {
	return {
		icon: '/images' + frontmatter.icon,
		index: frontmatter.index.toString().padStart(2, '0'),
		title: frontmatter.title,
		description: frontmatter.description,
		tagBegin: frontmatter.tagBegin,
		tagEnd: frontmatter.tagEnd,
		descriptionClasses: frontmatter.descriptionClasses,
		containerClasses: frontmatter.containerClasses
	};
};
