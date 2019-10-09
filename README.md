tomcli
======



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/tomcli.svg)](https://npmjs.org/package/tomcli)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/tomilenko/tomcli?branch=master&svg=true)](https://ci.appveyor.com/project/tomilenko/tomcli/branch/master)
[![Downloads/week](https://img.shields.io/npm/dw/tomcli.svg)](https://npmjs.org/package/tomcli)
[![License](https://img.shields.io/npm/l/tomcli.svg)](https://github.com/tomilenko/tomcli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g tomcli-v
$ tomcli COMMAND
running command...
$ tomcli (-v|--version|version)
tomcli-v/0.0.6 darwin-x64 node-v12.1.0
$ tomcli --help [COMMAND]
USAGE
  $ tomcli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`tomcli create [TEMPLATE] [NAME]`](#tomcli-create-template-name)
* [`tomcli hello [FILE]`](#tomcli-hello-file)
* [`tomcli help [COMMAND]`](#tomcli-help-command)

## `tomcli create [TEMPLATE] [NAME]`

Create new project

```
USAGE
  $ tomcli create [TEMPLATE] [NAME]

ARGUMENTS
  TEMPLATE  Template name
  NAME      Project name

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/create.ts](https://github.com/tomilenko/tomcli/blob/v0.0.6/src/commands/create.ts)_

## `tomcli hello [FILE]`

describe the command here

```
USAGE
  $ tomcli hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ tomcli hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/tomilenko/tomcli/blob/v0.0.6/src/commands/hello.ts)_

## `tomcli help [COMMAND]`

display help for tomcli

```
USAGE
  $ tomcli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.1/src/commands/help.ts)_
<!-- commandsstop -->
