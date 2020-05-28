awsm-cli-tools
========

Awesome CLI tools

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/awsm-cli-tools.svg)](https://npmjs.org/package/awsm-cli-tools)
[![Downloads/week](https://img.shields.io/npm/dw/awsm-cli-tools.svg)](https://npmjs.org/package/awsm-cli-tools)
[![License](https://img.shields.io/npm/l/awsm-cli-tools.svg)](https://github.com/awsmio/cli-tools/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g awsm-cli-tools
$ awsm COMMAND
running command...
$ awsm (-v|--version|version)
awsm-cli-tools/0.0.2 darwin-x64 node-v12.14.1
$ awsm --help [COMMAND]
USAGE
  $ awsm COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`awsm base INPUT`](#awsm-base-input)
* [`awsm base64 INPUT`](#awsm-base64-input)
* [`awsm crypto INPUT`](#awsm-crypto-input)
* [`awsm help [COMMAND]`](#awsm-help-command)

## `awsm base INPUT`

```
USAGE
  $ awsm base INPUT

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/base.ts](https://github.com/awsmio/cli-tools/blob/v0.0.2/src/commands/base.ts)_

## `awsm base64 INPUT`

Base64 encode/decode the provided input

```
USAGE
  $ awsm base64 INPUT

OPTIONS
  -d, --decode  Decode the input
  -e, --encode  Encode the input
  -h, --help    show CLI help

ALIASES
  $ awsm b64
```

_See code: [src/commands/base64.ts](https://github.com/awsmio/cli-tools/blob/v0.0.2/src/commands/base64.ts)_

## `awsm crypto INPUT`

Hash the provided input

```
USAGE
  $ awsm crypto INPUT

OPTIONS
  -h, --help  show CLI help

ALIASES
  $ awsm md5
  $ awsm sha1
```

_See code: [src/commands/crypto.ts](https://github.com/awsmio/cli-tools/blob/v0.0.2/src/commands/crypto.ts)_

## `awsm help [COMMAND]`

display help for awsm

```
USAGE
  $ awsm help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.0.1/src/commands/help.ts)_
<!-- commandsstop -->
