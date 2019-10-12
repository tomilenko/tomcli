tomcli

## CLI tool


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@tomilenko/tomcli.svg)](https://img.shields.io/npm/v/@tomilenko/tomcli)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/tomilenko/tomcli?branch=master&svg=true)](https://ci.appveyor.com/project/tomilenko/tomcli/branch/master)
[![Downloads/week](https://img.shields.io/npm/dw/@tomilenk/tomcli.svg)](https://npmjs.org/package/@tomilenko/tomcli)
[![License](https://img.shields.io/npm/l/tomcli.svg)](https://github.com/tomilenko/tomcli/blob/master/package.json)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=LW54FD3RBE2PJ)

<!-- toc -->
* [Description](#description)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Description
<!-- description -->

The command line tool for generating projects or specific files. You can generate predefined project template like express app with custom project structure etc. You can find it in `templates/projects`. 

You can add you own template (like in `templates/projects/node-express`) and generate it where you need for new project setup. 

<!-- descriptionstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @tomilenko/tomcli
$ tomcli COMMAND
running command...
$ tomcli (-v|--version|version)
@tomilenko/tomcli/0.1.5 darwin-x64 node-v12.1.0
$ tomcli --help [COMMAND]
USAGE
  $ tomcli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`tomcli generate [TEMPLATE] [NAME] [DEST]`](#tomcli-generate-template-name-dest)
* [`tomcli hello [FILE]`](#tomcli-hello-file)
* [`tomcli help [COMMAND]`](#tomcli-help-command)
* [`tomcli project [TEMPLATE] [NAME]`](#tomcli-project-template-name)

## `tomcli generate [TEMPLATE] [NAME] [DEST]`

Generate files

```
USAGE
  $ tomcli generate [TEMPLATE] [NAME] [DEST]

ARGUMENTS
  TEMPLATE  Generation type name
  NAME      Project name
  DEST      Destination directory

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ tomcli generate
```

_See code: [src/commands/generate.ts](https://github.com/tomilenko/tomcli/blob/v0.1.5/src/commands/generate.ts)_

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

_See code: [src/commands/hello.ts](https://github.com/tomilenko/tomcli/blob/v0.1.5/src/commands/hello.ts)_

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

## `tomcli project [TEMPLATE] [NAME]`

Create new project

```
USAGE
  $ tomcli project [TEMPLATE] [NAME]

ARGUMENTS
  TEMPLATE  Template name
  NAME      Project name

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/project.ts](https://github.com/tomilenko/tomcli/blob/v0.1.5/src/commands/project.ts)_
<!-- commandsstop -->
