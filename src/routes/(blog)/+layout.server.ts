import { getBlogBySlug } from '$lib/data/blogs/api';
import type { Blog } from '$lib/utils/types.js';
import Vibrant from 'node-vibrant';

export async function load({ params, fetch }) {
	const { slug } = params;
	if (!slug) {
		return { status: 404 };
	}
	const blog = await getBlogBySlug(slug);
	const response: {
		blog: Blog | null;
		colours?: { [key: string]: number[] };
	} = {
		blog
	};
	if (blog?.coverImage) {
		try {
			const res = await fetch(blog.coverImage.src, {
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
