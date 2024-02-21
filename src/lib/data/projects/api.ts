import { getFileNamesFromDir, paginate } from '$lib/utils/fn';
import fs from 'fs-extra';
import grayMatter from 'gray-matter';
import path from 'path';
import { parseProjects } from './model';
import type { Project, PaginatedResult } from '$lib/utils/types';

const MAX_PROJECTS_PER_PAGE = 6;
const MD_FILES_PATH = path.join(process.cwd(), 'cms/projects');

export const getProjects = async (
	page?: number,
	count?: number
): Promise<PaginatedResult<Project>> => {
	const mdFiles = await getFileNamesFromDir(MD_FILES_PATH, '.md');
	mdFiles.reverse();

	const paginatedProjects = paginate(mdFiles, page, count, MAX_PROJECTS_PER_PAGE);

	const projects: Project[] = [];

	for (const mdFile of paginatedProjects) {
		const fileContent = await fs.readFile(`${MD_FILES_PATH}/${mdFile}`, 'utf-8');
		const parsedData = grayMatter(fileContent);
		projects.push(parseProjects(parsedData.data));
	}

	return {
		items: projects,
		totalItems: mdFiles.length,
		totalPages: Math.ceil(mdFiles.length / (count ?? MAX_PROJECTS_PER_PAGE)),
		currentPage: page ?? 1
	};
};
