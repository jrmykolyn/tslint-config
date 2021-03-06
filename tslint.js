var path = require('path');

module.exports = {
  rulesDirectory: path.join(path.dirname(require.resolve('tslint-eslint-rules')), 'dist/rules'),
  rules: {
    typedef: [true, 'parameter', 'property-declaration', 'member-variable-declaration'],
    'member-ordering': [true, {
      order: 'instance-sandwich'
    }],
    'no-internal-module': true,
    'typedef-whitespace': [true, {
      'call-signature': 'nospace',
      'index-signature': 'nospace',
      parameter: 'nospace',
      'property-declaration': 'nospace',
      'variable-declaration': 'nospace'
    }, {
      'call-signature': 'space',
      'index-signature': 'space',
      parameter: 'space',
      'property-declaration': 'space',
      'variable-declaration': 'space'
    }],
    forin: true,
    'label-position': true,
    'label-undefined': true,
    'no-arg': true,
    'no-console': [true, 'log'],
    'no-construct': true,
    'no-shadowed-variable': true,
    'no-switch-case-fall-through': true,
    'no-unreachable': true,
    'no-unsafe-finally': true,
    'no-unused-expression': true,
    'no-unused-new': true,
    'no-unused-variable': [true],
    'no-use-before-declare': true,
    'no-var-keyword': true,
    'triple-equals': [true, 'allow-null-check'],
    'use-isnan': true,
    indent: [true, 'spaces'],
    'linebreak-style': [true, 'LF'],
    'max-line-length': [true, 120],
    'no-trailing-whitespace': true,
    'arrow-parens': true,
    'class-name': true,
    'comment-format': [true, 'check-space', 'check-lowercase'],
    'interface-name': [true, 'never-prefix'],
    'jsdoc-format': true,
    'new-parens': true,
    'no-consecutive-blank-lines': true,
    'object-literal-key-quotes': [true, 'as-needed'],
    'object-literal-shorthand': true,
    'one-line': [true, 'check-catch', 'check-finally', 'check-else', 'check-open-brace', 'check-whitespace'],
    'one-variable-per-declaration': [true, 'ignore-for-loop'],
    'ordered-imports': [true, {
      'import-sources-order': 'lowercase-last',
      'named-imports-order': 'lowercase-first'
    }],
    quotemark: [true, 'single', 'avoid-escape'],
    semicolon: [true, 'always'],
    'variable-name': [true, 'ban-keywords', 'check-format', 'allow-leading-underscore'],
    whitespace: [true, 'check-branch', 'check-decl', 'check-operator', 'check-moduler', 'check-type'],
    'no-constant-condition': true,
    'no-duplicate-case': true,
    'no-empty': true,
    'no-empty-character-class': true,
    'no-extra-boolean-cast': true,
    'no-extra-semi': true,
    'no-inner-declarations': [true, 'both'],
    'no-invalid-regexp': true,
    'no-irregular-whitespace': true,
    'no-regex-spaces': true,
    'no-sparse-arrays': true,
    'no-unexpected-multiline': true,
    'valid-typeof': true,
    'block-spacing': [true, 'always'],
    'brace-style': [true, '1tbs', {
      allowSingleLine: true
    }]
  }
};
