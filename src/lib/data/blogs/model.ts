import type { Blog } from "$lib/utils/types";

export function parseSkills(frontmatter: any): Blog {
	return {
		slug: frontmatter.slug,
		title: frontmatter.slug,
		coverImage: frontmatter.coverImage,
		date: frontmatter.date,
		excerpt: frontmatter.excerpt,
		hidden: frontmatter.hidden,
		showImage: frontmatter.showImage,
		tags: frontmatter.tags,
		updated: frontmatter.updated,
		categories: frontmatter.categories
	}
};