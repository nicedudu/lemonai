module.exports = {
    env: {
        es6: true,
        browser: true,
        node: true
    },
    extends: [
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
        'prettier/react',
        'prettier/@typescript-eslint'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2021,
        ecmaFeatures: {
            jsx: true
        },
        project: './tsconfig.json'
    },
    plugins: ['react', 'jsx-a11y', 'import', 'prettier', '@typescript-eslint'],
    rules: {
        'no-console': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'no-prototype-builtins': 'off',
        'import/prefer-default-export': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'react/jsx-filename-extension': [
            'warn',
            {
                'extensions': [
                    '.js',
                    '.jsx',
                    '.ts',
                    '.tsx'
                ]
            }
        ]
    }
}