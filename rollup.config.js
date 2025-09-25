import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import terser from '@rollup/plugin-terser';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js', 
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: './dist',
    }),
    babel({
      extensions: ['.ts', '.tsx'],
      babelHelpers: 'bundled',
      presets: ['@babel/preset-react', '@babel/preset-typescript'],
      exclude: 'node_modules/**',
    }),
    terser(),
  ],
  external: ['react', 'react-native', 'react-native-svg', '@lineiconshq/free-icons'],
};