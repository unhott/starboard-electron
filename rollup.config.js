import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import replace from '@rollup/plugin-replace';
import {terser} from 'rollup-plugin-terser';

const pkg = require("./package.json");

export default {
  input: `node_modules/starboard-wrap/src/index.ts`,
  output: [
    {file: 'node_modules/starboard-wrap/dist/index.js', format: 'es'},
    {file: 'node_modules/starboard-wrap/dist/index.min.js', format: 'es', plugins: [terser()]},
    {file: 'node_modules/starboard-wrap/dist/index.cjs', format: 'cjs'},
    {file: 'node_modules/starboard-wrap/dist/index.iife.js', format: 'iife', name: "starboardWrap"}
  ],
  plugins: [
    typescript({
      include: [
          '.node_modules/starboard-wrap/src/**/*.ts',
      ],
    }),
    // replace({"__STARBOARD_WRAP_VERSION__": pkg.version}),
    resolve(),
    commonjs(),
  ]
};
