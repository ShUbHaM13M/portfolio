import { createHighlighter } from 'shiki';

const codeHighlighter = await createHighlighter({
	themes: ['catppuccin-frappe', 'slack-dark', 'github-dark'],
	langs: [
		'javascript',
		'typescript',
		'rust',
		'c',
		'python',
		'shell',
		'bash',
		'html',
		'toml',
		'dart'
	]
});

export default codeHighlighter;
