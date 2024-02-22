import { getAllProjectSlugs } from '$lib/data/projects/api.js';
import { EntryGenerator } from './$types.js';

export async function load({ parent }) {
	const data = await parent();
	return data;
}

export const entries: EntryGenerator = async () => {
	const slugs = await getAllProjectSlugs();
	return slugs.map((slug) => ({ slug }));
};

export const prerender = true;
