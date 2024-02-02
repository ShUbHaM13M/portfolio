import fs from 'fs-extra';
import grayMatter from 'gray-matter';
import path from 'path';
import { parseSkills } from "./model";
import type Skill from './model';

const MD_FILES_PATH = path.join(process.cwd(), 'cms/skills');

export const getSkills = async (): Promise<Skill[]> => {
	const fileNames = await fs.readdir(MD_FILES_PATH);
	const mdFiles = fileNames.filter((fileName: string) => fileName.endsWith('.md'));
	mdFiles.reverse();

	const items: Skill[] = [];

	for (const mdFile of mdFiles) {
		const fileContent = await fs.readFile(`${ MD_FILES_PATH }/${ mdFile }`, 'utf-8');
		const parsedData = grayMatter(fileContent);
		items.push(parseSkills(parsedData.data));
	}

	return items;
}