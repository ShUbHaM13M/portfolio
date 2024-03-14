import { getBlogs } from '$lib/data/blogs/api';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const { page } = params;
	const currentPage = page ? parseInt(page) : 1;
	const response = await getBlogs(currentPage);
	if (currentPage > response.totalPages) error(404, 'Not found');
	return response;
}
