import { defaultColors, defineConfig } from 'histoire';
import { HstSvelte } from '@histoire/plugin-svelte';

export default defineConfig({
	setupFile: '/src/histoire-setup.ts',
	plugins: [HstSvelte()],
	theme: {
		title: 'Histoire',
		// logo: {
		// 	square: './static/favicons/favicon.svg',
		// 	light: './static/favicons/favicon.svg',
		// 	dark: './static/favicons/favicon.svg'
		// },
		// favicon: './static/favicons/favicon.ico',
		colors: {
			primary: defaultColors.cyan
		}
	}
});
