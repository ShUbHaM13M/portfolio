import { getAllSlugs } from '$lib/data/blogs/api';

export async function load({ parent }) {
	const data = await parent();
	return data;
}

export async function entries() {
	const slugs = await getAllSlugs();
	return slugs.map((slug) => ({ slug }));
}
