import fs from 'fs-extra';

const MAX_PER_PAGE = 9;

export async function getFileNamesFromDir(
	path: string,
	fileExtension: null | string = null
): Promise<string[]> {
	let fileNames = await fs.readdir(path);
	fileNames = fileNames.filter((fileName) => !fileName.startsWith('_'));
	if (fileExtension) {
		return fileNames.filter((fileName) => fileName.endsWith(fileExtension));
	}
	return fileNames;
}

export function paginate<T>(
	items: T[],
	page?: number,
	count?: number,
	max: number = MAX_PER_PAGE
): T[] {
	const pageSize = count ?? max;
	const startIndex = page ? (page - 1) * pageSize : 0;
	const endIndex = page ? page * pageSize : (count ?? 9999);
	const paginatedItems = items.slice(startIndex, endIndex);
	return paginatedItems;
}
