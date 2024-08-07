import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import { fixupPluginRules } from '@eslint/compat'
import ts from '@typescript-eslint/eslint-plugin'
import prettier from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import'

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      globals: globals.browser
    },
    plugins: {
      ['import']: fixupPluginRules(importPlugin),
      '@typescript-eslint': ts
    },
    rules: {
      '@/no-multiple-empty-lines': [
        'error', {
          max: 1
        }
      ],
      'import/no-unresolved': 'off',
      'import/newline-after-import': 'error',
      'import/first': 'error',
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          'alphabetize': {
            order: 'asc',
            caseInsensitive: true
          },
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type'
          ]
        }
      ]
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  prettier
]
