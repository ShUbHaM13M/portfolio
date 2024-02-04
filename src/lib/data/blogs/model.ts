import type { Blog } from "$lib/utils/types";

export function parseBlogs(frontmatter: any, content: string): Blog {
	return {
		slug: frontmatter.slug,
		title: frontmatter.title,
		content,
		coverImage: frontmatter.coverImage ? {
			src: '/images' + frontmatter.coverImage,
			alt: frontmatter.coverImageAlt
		} : undefined,
		socialImage: frontmatter.socialImage ? {
			src: '/images' + frontmatter.socialImage,
			alt: ''
		} : undefined,
		date: frontmatter.date,
		excerpt: frontmatter.excerpt,
		hidden: frontmatter.hidden,
		showImage: frontmatter.showImage,
		tags: frontmatter.tags,
		updated: frontmatter.updated,
		categories: frontmatter.categories
	}
};