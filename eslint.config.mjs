import globals from 'globals'
import pluginJs from '@eslint/js'
import tsEslint from 'typescript-eslint'
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
            'lib/**'
        ],

        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node
            }
        },

        plugins: {
            n: nPlugin,
            import: importPlugin,
            promise: promisePlugin
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
