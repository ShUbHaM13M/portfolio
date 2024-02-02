export type Tag = {
	label: string,
	color?: 'primary' | 'secondary' | string
}

export type Skill = {
	icon: string,
	index: string,
	title: string,
	description: string,
	tagBegin: string,
	tagEnd: string,
	descriptionClasses?: string,
	containerClasses?: string,
}

export type WorkExperience = {
	company: string,
	designation: string,
	timeFrame: string,
	current: boolean,
	description: string,
	tags: Tag[],
};

export type Blog = {
	slug: string,
	title: string,
	excerpt: string,
	coverImage: string,
	showImage: boolean
	date: Date
	updated: boolean
	hidden: boolean
	tags: []
	categories: string[]
}