import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('sveltejs/kit').Config} **/
const config = {
	preprocess: [
		vitePreprocess({
			scss: {
				prependData: `@use 'pico';`
			}
		})
	],
	kit: {
		adapter: adapter({
			fallback: 'index.html'
		}),
		paths: {
			base: '/portfolio'
		}
	}
};

export default config;
