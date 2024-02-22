import { getProjectBySlug } from '$lib/data/projects/api.js';

export async function load({ params }) {
	const { slug } = params;
	if (!slug) {
		return { status: 404 };
	}
	const response = {
		project: await getProjectBySlug(slug)
	};
	return response;
}
