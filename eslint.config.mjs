import globals from 'globals'
import pluginJs from '@eslint/js'
import tsEslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import standard from 'eslint-config-standard'
import importPlugin from 'eslint-plugin-import'
import nPlugin from 'eslint-plugin-n'
import promisePlugin from 'eslint-plugin-promise'

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        files: [
            '**/*.{js,mjs,cjs,ts}'
        ],

        ignores: [
            'node_modules/**',
            'lib/**',
            'types.d.ts'
        ],

        languageOptions: {
            parser: tsParser,

            globals: {
                ...globals.browser,
                ...globals.node
            }
        },

        plugins: {
            n: nPlugin,
            import: importPlugin,
            promise: promisePlugin,
            '@typescript-eslint': tsEslint
        },

        rules: {
            ...pluginJs.configs.recommended.rules,
            ...tsEslint.configs.recommended.rules,
            ...standard.rules,
            indent: [2, 4],
            'no-unused-vars': 1,
            'no-console': 1,
            'no-debugger': 1,
            'standard/no-callback-literal': 0
        }
    }
]
