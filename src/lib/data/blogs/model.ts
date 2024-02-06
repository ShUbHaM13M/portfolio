import type { Blog } from '$lib/utils/types';

const WORD_REGEX = /\b\S+\b/g;
const AVERAGE_WPM = 225;

function getReadTime(content: string): number {
	const words = content.trim();
	const matches = words.match(WORD_REGEX);
	const wordCount = matches ? matches.length : 0;
	return Math.ceil(wordCount / AVERAGE_WPM);
}

export function parseBlogs(frontmatter: any, content: string): Blog {
	return {
		slug: frontmatter.slug,
		title: frontmatter.title,
		content,
		coverImage: frontmatter.coverImage
			? {
				src: '/images' + frontmatter.coverImage,
				alt: frontmatter.coverImageAlt
			}
			: undefined,
		socialImage: frontmatter.socialImage
			? {
				src: '/images' + frontmatter.socialImage,
				alt: ''
			}
			: undefined,
		date: frontmatter.date,
		excerpt: frontmatter.excerpt,
		hidden: frontmatter.hidden,
		showImage: frontmatter.showImage,
		tags: frontmatter.tags,
		updated: frontmatter.updated,
		categories: frontmatter.categories,
		readTime: getReadTime(content)
	};
}
