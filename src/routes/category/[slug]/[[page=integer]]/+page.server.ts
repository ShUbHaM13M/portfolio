import { getArticlesByCategory } from '$lib/data/category/api.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const { slug: category, page } = params;
	if (!category) {
		error(404, 'Category Not Found');
	}
	const pageNumber = page ? parseInt(page) : undefined;
	const articles = await getArticlesByCategory(category, pageNumber, undefined);
	if (pageNumber && pageNumber > articles.totalPages) {
		error(404, 'Not Found');
	}
	return articles;
}
