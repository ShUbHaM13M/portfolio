/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: ['selector', '[data-theme="dark"]'],
	theme: {
		extend: {
			colors: {
				primary: '#0B192F',
				subtitle: '#8892AF',
				secondary: '#CDD1DA',
				white: '#F8EDFF',
				'light-white': '#F8F8F8',
				accent: '#19D645',
				'accent-light': '#0066CC',
				grey: '#131418',
				header: 'rgba(237, 237, 237, 0.18)',
				card: '#343F52',
				'card-light': '#E7E7E7'
			},
			fontFamily: {
				podkova: ['Podkova', 'serif'],
				'short-stack': ['Short Stack', 'cursive'],
				'fira-code': ['Fira Code', 'monospace']
			}
		}
	},
	plugins: []
};
