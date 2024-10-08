// .eslintrc.js
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'false', // Exemplo de exceção
      },
    ],
  },
};
