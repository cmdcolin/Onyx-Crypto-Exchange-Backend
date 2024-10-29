import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
	{ ignores: ['dist/'] },
	{ files: ['**/*.{js,ts, jsx, tsx}'] },
	{ files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
	{
		languageOptions: { globals: globals.browser },
		rules: {
			'prettier/prettier': [
				'error',
				{
					endOfLine: 'auto',
					singleQuote: true,
				},
			],
		},
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	eslintPluginPrettierRecommended,
];
