import Command from './base'
import {flags} from '@oclif/command'

export default class Base64 extends Command {
  // Buffer encodings used for conversion
  private encodings: string[] = ['utf8', 'base64'];

  static aliases = ['b64'];

  static args = Command.args;

  static description = 'Base64 encode/decode the provided input';

  static flags = {
    ...Command.flags,
    decode: flags.boolean({char: 'd', description: 'Decode the input', exclusive: ['encode']}),
    encode: flags.boolean({char: 'e', description: 'Encode the input', exclusive: ['decode']}),
  };

  async run() {
    // Switch the encodings if this is a base64 decode
    this.getFlag('decode') && this.encodings.reverse();

    const [source, destination] = this.encodings;
    this.log(Buffer.from(this.input, source).toString(destination));
  }
}
