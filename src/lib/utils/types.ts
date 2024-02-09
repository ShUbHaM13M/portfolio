export type Tag = {
	label: string;
	color?: 'primary' | 'secondary' | string;
};

export type PaginatedResult<T> = {
	items: T[];
	totalItems: number;
	totalPages: number;
	currentPage: number;
};

export type Skill = {
	icon: string;
	index: string;
	title: string;
	description: string;
	tagBegin: string;
	tagEnd: string;
	descriptionClasses?: string;
	containerClasses?: string;
};

export type WorkExperience = {
	company: string;
	designation: string;
	timeFrame: string;
	current: boolean;
	description: string;
	tags: Tag[];
};

export type Image = {
	src: string;
	alt: string;
};

export type Blog = {
	slug: string;
	title: string;
	excerpt: string;
	content: string;
	coverImage?: Image;
	socialImage?: Image;
	showImage: boolean;
	date: Date;
	updated: boolean;
	hidden: boolean;
	tags: string[];
	categories: string[];
	readTime: number;
};

export type CodeBlockTheme = 'frappe' | 'machiato' | 'latte';
