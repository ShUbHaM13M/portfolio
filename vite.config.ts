import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-vercel';

export default defineConfig({
  plugins: [sveltekit({
    preprocess: vitePreprocess(),
    prerender: {
      handleMissingId: 'ignore',
      handleHttpError: ({ path }) => {
        if (path.indexOf(".avif") || path.indexOf(".webp") || path.indexOf(".png")) {
          return;
        }
      }
    },
    adapter: adapter(),
    extensions: [".svelte", ".md"]
	})],
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
