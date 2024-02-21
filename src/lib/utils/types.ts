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

export type Project = {
	slug: string;
	name: string;
	description: string;
	images?: string[];
	githubLink?: string;
	technologies: CustomTag[];
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
	tags: CustomTag[];
};

export type Image = {
	src: string;
	alt: string;
};

export type CustomTag = {
	label: string;
	accentColor: string;
	textColor: string;
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
	tags: CustomTag[];
	categories: string[];
	readTime: number;
};

export type CodeBlockTheme = 'frappe' | 'machiato' | 'latte';
