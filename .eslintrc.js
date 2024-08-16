module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:@typescript-eslint/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json']
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    'import/extensions': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.tsx']
      }
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    quotes: [2, 'single'],
    semi: 'off',
    '@typescript-eslint/semi': 'off',
    'no-console': 1,
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    'multiline-ternary': ['error', 'never'],
    'strict-boolean-expressions': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-shadow': ['error']
  }
};
