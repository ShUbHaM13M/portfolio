import fs from 'fs-extra'
import grayMatter from 'gray-matter';
import path from 'path';
import { parseWorkExperiences } from './model';
import type WorkExperience from './model';

const MD_FILES_PATH = path.join(process.cwd(), 'cms/work-experiences');

export const getWorkExperiences = async (): Promise<WorkExperience[]> => {
	const files = await fs.readdir(MD_FILES_PATH);
	const mdFiles = files.filter((fileName: string) => fileName.endsWith('.md'));
	mdFiles.reverse();

	const items: WorkExperience[] = [];

	for (const mdFile of mdFiles) {
		const fileContent = await fs.readFile(`${ MD_FILES_PATH }/${ mdFile }`, 'utf-8');
		const parsedData = grayMatter(fileContent);
		items.push(parseWorkExperiences(parsedData.data));
	}

	return items;
}