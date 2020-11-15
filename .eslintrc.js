module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript'
  ],
  rules: { // 0 = off, 1 = warning, 2 = error
    'no-useless-escape': 0,
    'no-fallthrough': 0,
    'eqeqeq': 1,
    'quotes': [ 2, 'single', { 'allowTemplateLiterals': true } ],
    'no-mixed-spaces-and-tabs': 'error',
    'no-nested-ternary': 2,
    'no-unneeded-ternary': 1,
    'semi': [ 1, 'never' ],
    'semi-spacing': [ 1, { 'before': false, 'after': true } ],
    'arrow-spacing': [ 1, { 'before': true, 'after': true } ],
    'keyword-spacing': [ 2, { 'before': true, 'after': true } ],
    'no-var': 2,
    'object-curly-spacing': [ 1, 'always', { 'arraysInObjects': false, 'objectsInObjects': false } ],
    'prefer-const': 2,
    'no-alert': 'off',
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-dupe-keys': 'error',
    'vue/no-unused-vars': 2,
    'vue/require-v-for-key': 2,
    'vue/return-in-computed-property': 2,
    'vue/attribute-hyphenation': 2,
    'vue/require-prop-types': 2,
    'vue/html-quotes': [ 2, 'double' ],
    'vue/v-bind-style': [ 1, 'shorthand' ],
    'vue/v-on-style': [ 1, 'shorthand' ],
    'vue/this-in-template': 2,
    'vue/html-indent': [ 2, 2, { 'baseIndent': 1 } ],
    'vue/script-indent': [ 2, 2, { 'baseIndent': 1 } ],
    'vue/no-unused-components': 1,
    'vue/attributes-order': [ 'error', {
      'order': [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        'UNIQUE',
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'EVENTS',
        'CONTENT'
      ]
    } ],
    'vue/max-attributes-per-line': [ 'error', {
      'singleline': 1,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    } ],
    'vue/order-in-components': [ 'error', {
      'order': [
        'el',
        'name',
        'parent',
        'functional',
        [ 'delimiters', 'comments' ],
        [ 'components', 'directives', 'filters' ],
        'extends',
        'mixins',
        'inheritAttrs',
        'model',
        [ 'props', 'propsData' ],
        'data',
        'computed',
        'watch',
        'methods',
        'LIFECYCLE_HOOKS',
        [ 'template', 'render' ],
        'renderError'
      ]
    } ]
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}
