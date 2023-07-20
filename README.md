# jsonl

A simple JSONL class that handles parsing and stringifying

## Installation

`npm install @fyresite/jsonl`

or

`yarn add @fyresite/jsonl`

## Usage

```javascript
const { readFile, writeFile } = require("fs/promises");
const JSONL = require("@fyresite/jsonl");

const jsonlFile = await readFile("example.jsonl");

const jsonl = JSONL.parse(jsonlFile);
jsonl.push({ foo: "bar" });

const jsonlString = JSONL.stringify(jsonl);

await writeFile("updated-example.jsonl", jsonlString);
```
