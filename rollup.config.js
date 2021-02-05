import path from 'path';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

const { LERNA_PACKAGE_NAME, LERNA_ROOT_PATH } = process.env;
const PACKAGE_ROOT_PATH = process.cwd();
const INPUT_FILE = path.join(PACKAGE_ROOT_PATH, 'src/index.ts');
const OUT_DIR = path.join(PACKAGE_ROOT_PATH, 'dist');
const PKG_JSON = require(path.join(PACKAGE_ROOT_PATH, 'package.json'));
const IS_BROWSER_BUNDLE = !!PKG_JSON.browser;

const formats = IS_BROWSER_BUNDLE ? ['umd'] : ['es', 'cjs'];

export default {
    input: INPUT_FILE,
    output: [
        {
            file: PKG_JSON.main,
            format: 'cjs',
            sourcemap: true
        },
        {
            file: PKG_JSON.module,
            format: 'es',
            sourcemap: true
        }
    ],
    plugins: [
        nodeResolve(),
        commonjs(),
        typescript({
            tsconfig: `${PACKAGE_ROOT_PATH}/tsconfig.json`
        }),
    ],
    external: [
        ...Object.keys(PKG_JSON.dependencies || {}),
        ...Object.keys(PKG_JSON.devDependencies || {}),
        ...Object.keys(PKG_JSON.peerDependencies || {})
    ]
}