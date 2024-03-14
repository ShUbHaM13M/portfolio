import { ArticleType, Project } from '$lib/utils/types';

export const parseProjects = (frontmatter: any, content: string): Project => {
	return {
		slug: frontmatter.slug,
		name: frontmatter.name,
		description: frontmatter.description,
		images: frontmatter.images
			? frontmatter.images.map((image: string) => '/images' + image)
			: undefined,
		githubLink: frontmatter.githubLink,
		technologies: frontmatter.technologies,
		content,
		type: ArticleType.project
	};
};
