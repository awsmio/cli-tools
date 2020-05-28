import {Command, flags} from '@oclif/command'
import * as Config from "@oclif/config";
import {OutputArgs, OutputFlags, ParserOutput} from '@oclif/parser/lib/parse';

export default abstract class extends Command {
  protected input: string;

  // Cache the parser output when the command is constructed
  private parserOutput: ParserOutput<OutputFlags<any>, OutputArgs<any>>;

  constructor(argv: string[], config: Config.IConfig) {
    super(argv, config);

    this.parserOutput = this.parse();
    this.input = this.parserOutput.args.input;
  }

  // Default input and help flags
  static args = [{name: 'input', required: true}];
  static flags = {help: flags.help({char: 'h'})};

  // Retrieve a parsed argument or flag
  getArg = (arg: string): any => this.parserOutput.args[arg] || null;
  getFlag = (flag: string): any => this.parserOutput.flags[flag] || null;
}
