import { getArticlesByCategory } from '$lib/data/category/api.js';

export async function load({ params }) {
	const { slug: category } = params;
	if (!category) {
		return { status: 404 };
	}
	const articles = await getArticlesByCategory(category);
	return articles;
}
