import Command from './base'

const crypto = require('crypto');

export default class Crypto extends Command {
  static args = Command.args;

  static aliases = ['md5', 'sha1'];

  static description = 'Hash the provided input';

  static flags = Command.flags;

  async run() {
    const algorithm = process.argv[2];

    this.log(crypto.createHash(algorithm).update(this.input).digest('hex'));
  }
}
