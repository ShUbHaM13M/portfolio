import { paginate } from '$lib/utils/fn';
import { getBlogs } from '../blogs/api';
import { getProjects } from '../projects/api';

const MAX_PER_PAGE = 6;

export async function getArticlesByCategory(
	category: string,
	page?: number,
	count?: number,
	showHidden = false
) {
	const blogs = await getBlogs(undefined, undefined, showHidden);
	const projects = await getProjects(undefined, undefined);

	const filteredBlogs = blogs.items.filter(
		(blog) =>
			blog.categories.some((value) => value.toLowerCase() === category.toLowerCase()) ||
			blog.tags.some((tag) => {
				if (tag.label?.length) return tag.label[0].toLowerCase() === category.toLowerCase();
				return false;
			})
	);
	const filteredProjects = projects.items.filter((project) =>
		project.technologies.some((tech) => {
			if (tech.label?.length) return tech.label[0].toLowerCase() === category.toLowerCase();
			return false;
		})
	);

	const filteredArticles = [...filteredProjects, ...filteredBlogs];

	const paginatedArticles = paginate(filteredArticles, page, count);

	return {
		items: paginatedArticles,
		totalItems: filteredArticles.length,
		totalPages: Math.ceil(filteredArticles.length / (count ?? MAX_PER_PAGE)),
		currentPage: page ?? 1,
		currentCategory: category
	};
}
