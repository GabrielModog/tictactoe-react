module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	plugins: ["react"],
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:prettier/recommended",
		"prettier",
	],
	rules: {
		"react/display-name": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"react/react-in-jsx-scope": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"react/prop-types": "off",
		"no-extra-boolean-cast": "off",
		"react-hooks/exhaustive-deps": "off",
		"no-console": "error",
		"@typescript-eslint/no-unused-vars": ["off", { ignoreRestSiblings: true }],
		"@typescript-eslint/no-empty-interface": "off",
	},
	settings: {
		react: {
			version: "detect",
		},
	},
};
