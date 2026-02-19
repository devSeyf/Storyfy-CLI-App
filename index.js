#!/usr/bin/env node
//console.log(process.argv);
const yargs = require("yargs");

const argv = yargs.argv;
console.log(argv.name);

