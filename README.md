# Clear-Node-Modules-CLI-Tool

A command-line tool to recursively delete all `node_modules` directories starting from the current directory. Useful for clearing up disk space and resolving issues related to outdated or corrupted `node_modules` folders.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)

## Installation

You can install `@mjavason/clear-node-modules` globally using npm:

```bash
npm install -g @mjavason/clear-node-modules
```

This will make the `clear-node-modules` command available globally on your system.

## Usage

To run the tool, simply execute the following command from your terminal:

```bash
clear-node-modules
```

This will start the process of recursively searching for and deleting all `node_modules` directories from the current directory downwards..

### Options

Currently, the tool does not support additional options or arguments. Future versions may include options for more granular control.

## Features

- **Recursive Search**: Finds and deletes `node_modules` directories in all subdirectories.
- **Cross-Platform**: Uses `rimraf` to ensure compatibility across different operating systems (Windows, macOS, Linux).
- **Safe Deletion**: Only deletes directories named `node_modules` to avoid accidental data loss.