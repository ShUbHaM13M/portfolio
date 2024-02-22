import { getProjects } from '$lib/data/projects/api.js';

export async function load({ params }) {
	let category;
	let currentPage = 1;
	const { args } = params;
	const argsList = args?.split('/');

	if (argsList) {
		const first = argsList[0];
		if (/^\d+$/.test(first)) {
			currentPage = parseInt(first);
		} else {
			category = first;
		}

		const second = argsList[1];
		if (/^\d+$/.test(second)) {
			currentPage = parseInt(second);
		}
	}

	let response;
	// eslint-disable-next-line no-empty
	if (category) {
		// TODO: Add support for categories
	} else {
		response = await getProjects(currentPage);
	}

	return response;
}
