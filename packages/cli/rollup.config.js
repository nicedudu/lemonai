import path from 'path';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';

const PACKAGE_ROOT_PATH = process.cwd();
const INPUT_FILE = path.join(PACKAGE_ROOT_PATH, 'src/index.ts');
const PKG_JSON = require(path.join(PACKAGE_ROOT_PATH, 'package.json'));

export default {
    input: INPUT_FILE,
    output: [
        {
            file: 'dist/index.js',
            format: 'cjs',
            sourcemap: true
        }
    ],
    plugins: [
        json(),
        nodeResolve(),
        commonjs(),
        typescript({
            tsconfig: `${PACKAGE_ROOT_PATH}/tsconfig.json`
        }),
    ],
    external: [
        ...Object.keys(PKG_JSON.devDependencies || {}),
        ...Object.keys(PKG_JSON.peerDependencies || {})
    ]
}