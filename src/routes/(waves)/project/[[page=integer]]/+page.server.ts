import { getProjects } from '$lib/data/projects/api.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const { page } = params;
	const currentPage = page ? parseInt(page) : 1;
	const response = await getProjects(currentPage);
	if (currentPage > response.totalPages) error(404, 'Not Found');
	return response;
}
