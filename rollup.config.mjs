import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'

export default [
    {
        input: 'src/deep.js',
        output: [
            {
                file: 'lib/deep.cjs.js',
                format: 'cjs'
            },
            {
                file: 'lib/deep.esm.js',
                format: 'esm'
            },
            {
                file: 'lib/deep.umd.js',
                format: 'umd',
                name: 'Deep'
            }
        ],
        plugins: [
            resolve(),
            commonjs(),
            typescript({ tsconfig: './tsconfig.json' }),
            terser()
        ]
    }
]
