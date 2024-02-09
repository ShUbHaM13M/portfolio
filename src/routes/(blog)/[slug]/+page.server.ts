import { getAllSlugs } from '$lib/data/blogs/api';
import { EntryGenerator } from './$types.js';

export async function load({ parent }) {
	const data = await parent();
	return data;
}

export const entries: EntryGenerator = async () => {
	const slugs = await getAllSlugs();
	return slugs.map((slug) => ({ slug }));
};

export const prerender = true;
