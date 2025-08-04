import type { StarlightPlugin, StarlightUserConfig } from '@astrojs/starlight/types';
import { fileURLToPath } from 'node:url';
import darkTheme from './syntax-themes/flexoki-dark.json';
import lightTheme from './syntax-themes/flexoki-light.json';
import type { AstroIntegration } from 'astro';

interface StarlightThemeFlexokiOptions {
	accentColor?: 'red' | 'orange' | 'yellow' | 'green' | 'cyan' | 'blue' | 'purple' | 'magenta';
}

export default function starlightThemeFlexoki({
	accentColor = 'cyan',
}: StarlightThemeFlexokiOptions = {}): StarlightPlugin {
	return {
		name: 'starlight-theme-flexoki',
		hooks: {
			setup({ config, updateConfig, addIntegration }) {
				// Register the theme’s custom CSS, including any user CSS *after* our own.
				const newConfig = {
					customCss: [
						'starlight-theme-flexoki/styles/layers.css',
						'starlight-theme-flexoki/styles/theme.css',
						'starlight-theme-flexoki/styles/base.css',
						`starlight-theme-flexoki/accent-themes/${accentColor}.css`,
						...(config.customCss || []),
					],
					components: {
						...config.components,
					},
					expressiveCode: {},
				} satisfies Partial<StarlightUserConfig>;

				if (!config.components?.Pagination) {
					newConfig.components.Pagination = fileURLToPath(
						new URL('./overrides/Pagination.astro', import.meta.url)
					);
				}

				// As long as the user hasn’t disabled Expressive Code, apply our styles.
				if (config.expressiveCode === false) {
					newConfig.expressiveCode = false;
				} else {
					const userExpressiveCodeConfig =
						!config.expressiveCode || config.expressiveCode === true ? {} : config.expressiveCode;

					newConfig.expressiveCode = {
						// Syntax highlighting themes.
						themes: [lightTheme, darkTheme],

						...userExpressiveCodeConfig,

						styleOverrides: {
							// Basic frame styles
							codeBackground: ['#100f0f', '#fffcf0'],
							borderRadius: '0.25rem',
							borderColor: ['var(--sl-color-gray-6)', 'var(--sl-color-gray-7)'],
							borderWidth: '0.1875rem',
							uiFontSize: 'var(--sl-flexoki-text-sm)',
							codeFontSize: 'var(--sl-flexoki-text-sm)',

							// Reduce padding slightly to counteract thicker borders.
							uiPaddingBlock: '0.15625rem' /** 2.5px */,

							...userExpressiveCodeConfig.styleOverrides,

							frames: {
								frameBoxShadowCssValue: 'none',
								// Terminal
								terminalTitlebarBorderBottomColor: 'transparent',
								terminalTitlebarBackground: 'var(--sl-color-gray-7, var(--sl-color-gray-6))',
								// Editor frame
								editorTabBarBackground: 'var(--sl-color-gray-7, var(--sl-color-gray-6))',
								editorActiveTabIndicatorTopColor: 'var(--sl-color-accent)',
								editorActiveTabIndicatorHeight: '2px',
								// Copy button
								inlineButtonBackground: 'var(--sl-color-gray-4)',
								inlineButtonBorderOpacity: '0',
								tooltipSuccessBackground: 'var(--sl-color-text-accent)',
								tooltipSuccessForeground: 'var(--sl-color-text-invert)',

								...userExpressiveCodeConfig.styleOverrides?.frames,
							},

							textMarkers: {
								inlineMarkerBorderWidth: '1px',
								lineMarkerAccentWidth: '0.1875rem',

								// red-900 / red-100
								delBackground: ['#3e1715', '#ffcabb'],
								// red-400 / red-600
								delBorderColor: ['#d14d41', '#af3029'],
								delDiffIndicatorColor: ['#d14d41', '#af3029'],

								// green-900 / green-100
								insBackground: ['#252d09', '#dde2b2'],
								// green-400 / green-600
								insBorderColor: ['#879a39', '#66800b'],
								insDiffIndicatorColor: ['#879a39', '#66800b'],

								// blue-900 / blue-50
								markBackground: ['#12253b', '#e1eceb'],
								// blue-400 / blue-600
								markBorderColor: ['#4385be', '#205ea6'],

								...userExpressiveCodeConfig.styleOverrides?.textMarkers,
							},
						},
					};
				}
				updateConfig(newConfig);

				addIntegration(ViteOverridesIntegration());
			},
		},
	};
}

/**
 * Configure’s Vite to import our `<ContentNotice>` override instead of Starlight’s.
 * This is used by Starlight’s `<FallbackContentNotice>` and `<DraftContentNotice>` components.
 */
function ViteOverridesIntegration() {
	return {
		name: 'starlight-theme-flexoki',
		hooks: {
			'astro:config:setup'({ updateConfig }) {
				updateConfig({
					vite: {
						resolve: {
							alias: [
								{
									find: /^\.\/ContentNotice\.astro$/,
									replacement: fileURLToPath(
										new URL('./overrides/ContentNotice.astro', import.meta.url)
									),
								},
							],
						},
					},
				});
			},
		},
	} satisfies AstroIntegration;
}
