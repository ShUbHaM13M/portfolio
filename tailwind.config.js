/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				text: {
					light: '#041C03',
					DEFAULT: '#041C03',
					dark: '#E4FCE3'
				},
				background: {
					light: '#F8F6F4',
					DEFAULT: '#F8F6F4',
					dark: '#020D02'
				},
				primary: {
					light: '#41E92B',
					DEFAULT: '#41E92B',
					dark: '#2CD416'
				},
				secondary: {
					light: '#A2D7C9',
					DEFAULT: '#A2D7C9',
					dark: '#285D4F'
				},
				accent: {
					light: '#2CC9BE',
					DEFAULT: '#2CC9BE',
					dark: '#36D3C8'
				}
			}
		}
	},
	plugins: []
};
