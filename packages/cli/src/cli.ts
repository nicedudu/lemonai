import { program } from 'commander';
import { getAppVersion } from './utils';
import createCommand from './command/create';

export default class CLI {

    constructor() {
        
    }

    run() {
        this.parseArgs();
    }

    parseArgs () {
        program
            .version(getAppVersion())
            .usage('<command> [options]');

        program
            .command('create <workflow-name>')
            .description('create a new workflow')
            .option('-o, --output <outputDir>', 'output to folder')
            .action((workflowName, options) => {
                createCommand(workflowName, options)
            });

        program.parse(process.argv);
    }
}