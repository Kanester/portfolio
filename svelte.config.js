import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import purgecss from 'vite-plugin-purgecss';

const basePath = process.env.BASE_PATH || '/portfolio';

const config = {
	preprocess: [vitePreprocess({ scss: { includePaths: ['node_modules'] } }), mdsvex()],
	kit: {
		adapter: adapter({ fallback: 'index.html' }),
		paths: { base: basePath }
	},
	vite: {
		plugins: [
			purgecss({
				content: ['./src/**/*.svelte', './src/**/*.html'],
				safelist: [/^fa-/, /^pico-/, /-active$/],
				defaultExtractor: (code) => code.match(/[\w-/:]+(?<!:)/g) || []
			})
		]
	},
	extensions: ['.svelte', '.svx']
};

export default config;
