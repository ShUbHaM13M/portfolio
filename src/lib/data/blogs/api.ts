import fs from 'fs-extra';
import grayMatter from 'gray-matter';
import path from 'path';
import { parseBlogs } from './model';
import type { Blog, PaginatedResult } from '$lib/utils/types';
import { getFileNamesFromDir, paginate } from '$lib/utils/fn';

const MAX_BLOGS_PER_PAGE = 9;
const MD_FILES_PATH = path.join(process.cwd(), 'cms/blogs');

export const getBlogs = async (
	page?: number,
	count?: number,
	showHidden = false
): Promise<PaginatedResult<Blog>> => {
	let mdFiles = await getFileNamesFromDir(MD_FILES_PATH, '.md');
	mdFiles.reverse();

	if (!showHidden) {
		mdFiles = mdFiles.filter((item) => !item.endsWith('--hidden.md'));
	}

	const paginatedBlogs = paginate(mdFiles, page, count, MAX_BLOGS_PER_PAGE);

	const blogs: Blog[] = [];

	for (const mdFile of paginatedBlogs) {
		const fileContent = await fs.readFile(`${MD_FILES_PATH}/${mdFile}`, 'utf-8');
		const parsedData = grayMatter(fileContent);
		blogs.push(parseBlogs(parsedData.data, parsedData.content));
	}

	return {
		items: blogs,
		totalItems: mdFiles.length,
		totalPages: Math.ceil(mdFiles.length / (count ?? MAX_BLOGS_PER_PAGE)),
		currentPage: page ?? 1
	};
};

export const getBlogBySlug = async (slug: string): Promise<Blog | null> => {
	const allBlogs = await getBlogs(undefined, undefined, true);
	const matchedBlog = allBlogs.items?.find((blog) => blog.slug === slug) ?? null;
	// TODO: make a list of related blogs
	return matchedBlog;
};

export const getAllSlugs = async (): Promise<string[]> => {
	const files = await fs.readdir(MD_FILES_PATH);
	const slugs = files.map((file) =>
		file.split('-').slice(3).join('-').replace('.md', '').replace('--hidden', '')
	);
	return slugs;
};
