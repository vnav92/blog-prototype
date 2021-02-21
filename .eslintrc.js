module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ['prettier', 'react-app'],
  rules: {
    'prettier/prettier': ['error'],
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-empty': 'error',
    'no-func-assign': 'error',
    'no-inner-declarations': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
  },
};
