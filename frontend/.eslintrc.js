module.exports = {
   env: {
      browser: true,
      es2021: true,
   },
   extends: ['plugin:react/recommended', 'airbnb'],
   parser: '@typescript-eslint/parser',
   parserOptions: {
      ecmaFeatures: {
         jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
   },
   plugins: ['react', '@typescript-eslint'],
   rules: {
      'import/no-webpack-loader-syntax': 'off',
      'no-console': 'off',
      'import/no-extraneous-dependencies': 'off',
      'import/no-unresolved': 'off',
      'react/function-component-definition': 'off',
      'no-nested-ternary': 'off', // in most cases this will never come up but if you ever need nested ternary it is usually just so code is more concise
      'import/prefer-default-export': 'off', // fixes indexing issues / styled files we dont want default exports

      // warns on unused vars vs breaks everything. this is for dev purposes
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',

      'react/jsx-curly-newline': 'off', // this is basically for if we have like 1 or 2 obj it makes the code cleaner by having it on 1 line const a = { bar: 1, foo: 2 }
      'react/jsx-boolean-value': 'off', // lets us put true for boolean value, lets code be more declarative (and readability)
      'function-paren-newline': 'off', // lets us do functions w/ vars on same line function(a, b)
      'operator-linebreak': 'off', // lets us do some ternary react rendering
      'implicit-arrow-linebreak': 'off', // this can lead to some funky arrow function return placements
      'no-trailing-spaces': 'off', // we cant do multiline comments

      // messes with our style guide with prepended white space
      indent: 'off',
      'react/jsx-indent': 'off',
      'react/jsx-indent-props': 'off',

      'react/require-default-props': 'off', // typescript handles this
      'no-confusing-arrow': 'off', // messes w/ styled component theme
      'no-param-reassign': 'off', // cant reassign state in redux
      'react/prop-types': 'off', // overriding react prop type w/ typescript

      'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }], // maybe we want jsx in tsx files wow

      // this thinks react import is being used before its being defiend lol
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': 'error',

      'linebreak-style': 'off', // LF CRLF thing
      'react/jsx-props-no-spreading': 'off', // we want prop spreading on jsx
      'no-underscore-dangle': 'off', // _id
      'object-curly-newline': 'off', // inline object stuff this makes our prop imports better
      semi: 'off', // ew

      // on imports we dont need the file extension name
      'import/extensions': [
         'off',
         'ignorePackages',
         {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
         },
      ],
      'prettier/prettier': 'off',

      // import order prettier stuff
      'import/order': [
         'error',
         {
            groups: ['builtin', 'external', 'internal'],
            pathGroups: [
               {
                  pattern: 'react',
                  group: 'external',
                  position: 'before',
               },
            ],
            pathGroupsExcludedImportTypes: ['react'],
            alphabetize: {
               order: 'asc',
               caseInsensitive: true,
            },
         },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
   },
}
