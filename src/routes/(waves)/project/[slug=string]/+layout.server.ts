import { getProjectBySlug } from '$lib/data/projects/api.js';
import type { Project } from '$lib/utils/types.js';
import { error } from '@sveltejs/kit';
import Vibrant from 'node-vibrant';

export async function load({ params, fetch }) {
	const { slug } = params;
	if (!slug) {
		error(404, 'Slug Not found');
	}

	const project = await getProjectBySlug(slug);
	if (!project) {
		error(404, 'Project not found, maybe I am still working on this');
	}
	const response: {
		project: Project;
		colours?: { [key: string]: number[] };
	} = {
		project
	};

	if (project?.images?.length) {
		try {
			const res = await fetch(project.images[0], {
				method: 'GET'
			});
			const data = await res.arrayBuffer();
			const imageBuffer = Buffer.from(data);
			const palette = await Vibrant.from(imageBuffer).getPalette();
			const colours: { [key: string]: number[] } = {};

			if (palette.Vibrant) colours['vibrant'] = palette.Vibrant.rgb;
			if (palette.DarkVibrant) colours['darkVibrant'] = palette.DarkVibrant.rgb;
			if (palette.LightVibrant) colours['lightVibrant'] = palette.LightVibrant.rgb;
			if (palette.LightMuted) colours['lightMuted'] = palette.LightMuted.rgb;
			if (palette.DarkMuted) colours['darkMuted'] = palette.DarkMuted.rgb;
			if (palette.Muted) colours['muted'] = palette.Muted.rgb;

			response.colours = colours;
		} catch (e) {
			console.error(e);
		}
	}
	return response;
}
