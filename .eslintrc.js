module.exports = {
  env: {
    jest: true,
    browser: true,
    node: true,
    es2021: true
  },
  globals: {
    document: false
  },
  extends: ['airbnb', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [0],
    'import/extensions': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    "import/no-unresolved": 'error',
    "import/prefer-default-export": 'off',
    "react/function-component-definition": [2,{ namedComponents: "function-declaration"},]
  },
  settings: {
    'import/resolver': {
      typescript: {}
    }
  }
};
