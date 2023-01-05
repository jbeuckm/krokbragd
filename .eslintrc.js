const elementsToForbid = require('./eslint/elementsToForbid').default

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['eslint-plugin-react-app', '@typescript-eslint', 'eslint-plugin-import'],
  rules: {
    'import/no-anonymous-default-export': 'off',
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': 'off', // this should not be off forever
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'react/forbid-elements': [1, { forbid: elementsToForbid }],
    'no-multiple-empty-lines': [1, { max: 1, maxBOF: 0 }],
    '@typescript-eslint/no-unused-vars': [
      1,
      {
        args: 'none',
      },
    ],
    // import ordering is not quite working as we want, and since it can be largely lint --fix'ed
    // I'm turning it off so it slows us down less as we work on the migration to the `@cibo/*` convention
    //   'import/order': [
    //     'warn',
    //     {
    //       groups: ['external', ['parent', 'internal'], 'sibling'],
    //       pathGroups: [
    //         {
    //           pattern: 'redux*',
    //           group: 'external',
    //           position: 'before',
    //         },
    //         {
    //           pattern: 'react*',
    //           group: 'external',
    //           position: 'before',
    //         },
    //         {
    //           pattern: 'react',
    //           group: 'external',
    //           position: 'before',
    //         },
    //       ],
    //       'newlines-between': 'always',
    //       alphabetize: { order: 'asc', caseInsensitive: true },
    //     },
    //   ],
  },
  extends: [
    'react-app',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
    {
      files: ['*.*'],
      rules: {
        'react/forbid-elements': 'off',
      },
    },
    {
      files: ['*.native.*'],
      rules: {
        'react/forbid-elements': 'error',
      },
    },
    {
      files: ['*.stories.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
}
