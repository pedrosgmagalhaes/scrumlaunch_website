module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  rules: {
    'vue/multi-word-component-names': 0,
    camelcase: 0,
    'vue/attribute-hyphenation': 0,
    'vue/require-prop-types': 0,
  },
}
