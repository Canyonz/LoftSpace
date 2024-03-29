module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended",
		"plugin:storybook/recommended",
		"plugin:storybook/recommended",
		"plugin:storybook/recommended",
	],
	overrides: [
		{
			files: ["**/src/**/*.test.{js,jsx}"],
			env: {
				jest: true,
			},
		},
	],
	globals: {
		__API__: true,
	},
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parserOptions: { ecmaVersion: "latest", sourceType: "module" },
	settings: { react: { version: "18.2" } },
	plugins: ["react-refresh"],
	rules: {
		"react-refresh/only-export-components": [
			"warn",
			{
				allowConstantExport: true,
			},
		],
		"react/prop-types": "off",
	},
};
