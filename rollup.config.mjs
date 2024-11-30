import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'

export default [
    {
        input: 'src/deep-tree.js',
        output: [
            {
                file: 'lib/deep-tree.cjs.js',
                format: 'cjs'
            },
            {
                file: 'lib/deep-tree.esm.js',
                format: 'esm'
            },
            {
                file: 'lib/deep-tree.umd.js',
                format: 'umd',
                name: 'DeepTree'
            }
        ],
        plugins: [
            resolve(),
            commonjs(),
            babel({
                exclude: 'node_modules/**', // 只编译我们的源代码
                babelHelpers: 'bundled'
            }),
            typescript({ tsconfig: './tsconfig.json' }),
            terser()
        ]
    }
]
