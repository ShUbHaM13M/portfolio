/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#0B192F',
				subtitle: '#8892AF',
				secondary: '#CDD1DA',
				white: '#F8EDFF',
				accent: '#19D645'
			}
		}
	},
	plugins: []
};
