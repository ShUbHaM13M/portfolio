import type { Blog } from "$lib/utils/types";

export function parseBlogs(frontmatter: any): Blog {
	return {
		slug: frontmatter.slug,
		title: frontmatter.title,
		coverImage: frontmatter.coverImage,
		socialImage: frontmatter.socialImage,
		date: frontmatter.date,
		excerpt: frontmatter.excerpt,
		hidden: frontmatter.hidden,
		showImage: frontmatter.showImage,
		tags: frontmatter.tags,
		updated: frontmatter.updated,
		categories: frontmatter.categories
	}
};