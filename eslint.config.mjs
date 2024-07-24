import globals from 'globals';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';


export default [
  {languageOptions: { globals: globals.browser }},
  pluginReactConfig,
  {
    rules: {
      '@html-eslint/indent': [2, 'error'],
    },
  }
];