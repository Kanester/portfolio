import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('sveltejs/kit').Config} **/
const config = {
	preprocess: vitePreprocess({
		scss: {
			includePaths: ['node_modules'],
			prependData: "@use '@picocss/pico/scss/pico';"
		}
	}),
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			base: '/portfolio'
		}
	}
};

export default config;
