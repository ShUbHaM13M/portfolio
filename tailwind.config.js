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
				accent: '#19D645',
				grey: '#131418',
				header: 'rgba(237, 237, 237, 0.18)'
			},
			fontFamily: {
				podkova: ['Podkova', 'serif'],
				'short-stack': ['Short Stack', 'cursive']
			}
		}
	},
	plugins: []
};
