import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import purgecss from 'vite-plugin-purgecss';

const basePath = process.env.BASE_PATH || '/portfolio';

/** @type {import('sveltejs/kit').Config} **/
const config = {
	preprocess: vitePreprocess({
		scss: {
			includePaths: ['node_modules']
		}
	}),

	kit: {
		adapter: adapter({
			fallback: 'index.html'
		}),
		paths: {
			base: basePath
		}
	},

	vite: {
		plugins: [
			purgecss({
				content: ['./src/**/*.svelte', './src/**/*.html'],
				safelist: [/^fa-/, /^pico-/, /-active$/],
				defaultExtractor: (code) => code.match(/[\w-/:]+(?<!:)/g) || []
			})
		]
	}
};

export default config;
