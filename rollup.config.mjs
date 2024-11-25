import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default [
    {
        input: 'src/deep.js',
        output: [
            {
                file: 'lib/deep.cjs.js',
                format: 'cjs',
            },
            {
                file: 'lib/deep.esm.js',
                format: 'esm',
            },
            {
                file: 'lib/deep.umd.js',
                format: 'umd',
                name: 'Deep',
            },
        ],
        plugins: [
            typescript({ tsconfig: './tsconfig.json' }),
            terser(),
        ],
    },
];

// // rollup.config.js
// import commonjs from '@rollup/plugin-commonjs';
// import resolve from '@rollup/plugin-node-resolve';
// import { terser } from 'rollup-plugin-terser';
// import typescript from '@rollup/plugin-typescript';

// export default [
//     // CommonJS (for Node) and ES module (for bundlers) build.
//     {
//         input: 'src/index.ts',
//         output: [
//             {
//                 file: 'lib/deep.cjs.js',
//                 format: 'cjs'
//             },
//             {
//                 file: 'lib/deep.esm.js',
//                 format: 'esm'
//             }
//         ],
//         plugins: [
//             resolve(),
//             commonjs(),
//             typescript({ tsconfig: './tsconfig.json' })
//         ]
//     },
//     // UMD build (for browsers)
//     {
//         input: 'src/index.ts',
//         output: {
//             file: 'lib/deep.umd.js',
//             format: 'umd',
//             name: 'MyLibrary'
//         },
//         plugins: [
//             resolve(),
//             commonjs(),
//             typescript({ tsconfig: './tsconfig.json' }),
//             terser()
//         ]
//     }
// ]
