interface IOptions {
    output: string
}

/**
 * 创建
*/
export default (projectName: string, options: IOptions) => {
    console.log('projectName', projectName)
    console.log('options', options)
}