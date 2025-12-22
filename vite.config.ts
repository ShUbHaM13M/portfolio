import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		target: 'esnext'
	},
	esbuild: {
		target: 'es2022'
	},
	resolve: {
		alias: {
			$routes: path.resolve('./src/routes'),
			$cms: path.resolve('./cms')
		}
	}
});
