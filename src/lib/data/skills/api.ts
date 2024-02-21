import fs from 'fs-extra';
import grayMatter from 'gray-matter';
import path from 'path';
import { parseSkills } from './model';
import type Skill from './model';
import { getFileNamesFromDir } from '$lib/utils/fn';

const MD_FILES_PATH = path.join(process.cwd(), 'cms/skills');

export const getSkills = async (): Promise<Skill[]> => {
	const mdFiles = await getFileNamesFromDir(MD_FILES_PATH, '.md');
	mdFiles.reverse();

	const items: Skill[] = [];

	for (const mdFile of mdFiles) {
		const fileContent = await fs.readFile(`${MD_FILES_PATH}/${mdFile}`, 'utf-8');
		const parsedData = grayMatter(fileContent);
		items.push(parseSkills(parsedData.data));
	}

	return items;
};
