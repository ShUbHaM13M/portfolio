import { getBlogBySlug } from "$lib/data/blogs/api";

export async function load({ params }) {
	const { slug } = params
	if (!slug) {
		return { status: 404 }
	}
	const response = {
		blog: await getBlogBySlug(slug)
	}
	return response;
}