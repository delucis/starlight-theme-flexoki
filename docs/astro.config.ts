import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import starlightThemeFlexoki from 'starlight-theme-flexoki';

export default defineConfig({
	site: 'https://delucis.github.io',
	base: '/starlight-theme-flexoki',
	integrations: [
		starlight({
			title: 'Starlight Flexoki',
			description: 'A warm and friendly Starlight theme based on the Flexoki colour palette',
			social: [
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/delucis/starlight-theme-flexoki",
				}
			],
			editLink: {
				baseUrl: 'https://github.com/delucis/starlight-theme-flexoki/edit/main/docs/',
			},
			head: [
				{
					tag: 'meta',
					attrs: {
						property: 'og:image',
						content: 'https://delucis.github.io/starlight-theme-flexoki/og.png',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:image:alt',
						content: 'Starlight Flexoki: A warm and friendly theme for your docs',
					},
				},
			],
			plugins: [starlightThemeFlexoki()],
			sidebar: [
				{
					label: 'Start Here',
					items: ['getting-started', 'configuration'],
				},
				{ label: 'Examples', autogenerate: { directory: 'examples' } },
			],
		}),
	],
});
