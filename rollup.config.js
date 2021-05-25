// rollup.config.js
import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'main.ts',
  output: {
    file: 'index.js',
    format: 'cjs'
  },
  plugins: [ 
      json(),
      typescript({lib: ["es5", "es6", "dom"], target: "es5"})
  ]
};