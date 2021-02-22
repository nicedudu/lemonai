import semver from 'semver';
import chalk from 'chalk';
import path from 'path';

/**
 * 获取根目录
 */
export const getRootPath = (): string => {
    return path.resolve(__dirname, '../');
}

/**
 * 获取程序版本信息
 */
export const getAppVersion = (): string => {
    return require(path.join(getRootPath(), 'package.json')).version;
}

/**
 * 检查Node的版本
 */
export const checkNodeVersion = () => {
    const requiredVersion = require(path.join(getRootPath(), 'package.json')).engines.node;
    const appName = require(path.join(getRootPath(), 'package.json')).name;

    if (!semver.satisfies(process.version, requiredVersion)) {
        console.log(chalk.red(`You are using Node ${process.version}, but this version of ${appName} requires Node ${requiredVersion}. \nPlease upgrade your Node version.`));
        process.exit(1);
    }
};

/**
 * 打印当前版本信息
 */
export const printPkgVersion = () => {
    const appVersion = getAppVersion();

    console.log(chalk.yellow.bold(`🍋 Lemonai v${appVersion}`));
    console.log();
};