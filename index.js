#!/usr/bin/env node

const args = process.argv.slice(2);
const exec = require('child_process').exec;
const fs = require('fs-extra');
const replace = require('replace-in-file');

const name = args[0];

if (name) {
  fs.copySync(__dirname + "/template", args[0]);
  fs.copySync(__dirname + "/template/gitignore", args[0] + "/.gitignore");
  fs.moveSync(args[0] + "/src/NAME", args[0] + "/src/" + name);
  replace.sync({
    "files": [
      args[0] + "/**/**",
      args[0] + "/src/" + name + "/*.cljs",
      args[0] + "/public/*"
    ],
    "from": "NAME",
    "to": name,
    "countMatches": true,
  });
  exec("cd " + name + "; git init");
} else {
  console.log("Usage: shadowfront APP-NAME");
}
