#!/usr/bin/env node

const { checkNodeVersion, printPkgVersion } = require('../dist');
const CLI = require('../dist').default;

// 检查运行环境的Node版本
checkNodeVersion();

// 打印当前CLI的版本
printPkgVersion();

// 运行
new CLI().run();

