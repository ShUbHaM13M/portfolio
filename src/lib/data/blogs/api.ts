import fs from 'fs-extra';
import grayMatter from 'gray-matter';
import path from 'path';
import { parseSkills } from "./model";
import type { Blog } from '$lib/utils/types';

const MD_FILES_PATH = path.join(process.cwd(), 'cms/blogs');

export const getBlogs = async (): Promise<Blog[]> => {
	const fileNames = await fs.readdir(MD_FILES_PATH);
	const mdFiles = fileNames.filter((fileName: string) => fileName.endsWith('.md'));
	mdFiles.reverse();

	const items: Blog[] = [];

	for (const mdFile of mdFiles) {
		const fileContent = await fs.readFile(`${ MD_FILES_PATH }/${ mdFile }`, 'utf-8');
		const parsedData = grayMatter(fileContent);
		items.push(parseSkills(parsedData.data));
	}

	return items;
}