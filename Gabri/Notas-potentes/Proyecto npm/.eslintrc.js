module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'arrow-parens': [
      'error',
      'as-needed',
    ],
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'no-unused-vars': ['warn', { argsIgnorePattern: 'next' }],
  },
};
