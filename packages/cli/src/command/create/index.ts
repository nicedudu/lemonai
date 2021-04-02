import inquirer from 'inquirer';
interface IOptions {
    output: string;
}

/**
 * 创建
 */
export default (projectName: string, options: IOptions) => {
    console.log("projectName", projectName);
    console.log("options", options);
    inquirer
        .prompt([
            {
              type: 'input',
              message: '请输入需要创建流程名称',
              name: 'flowName',
              validate: function (input) {
                if (!input) {
                  return '流程名称不能为空'
                }
                return true;
              },
            },
          ]).then((answers) => {
            console.log(JSON.stringify(answers, null, "  "));
        });
};
