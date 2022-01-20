#!/usr/bin/env node

const args = process.argv.slice(2);
const exec = require('child_process').exec;
const fs = require('fs-extra');
const replace = require('replace-in-file');

const name = args[0];
const dir = name && args[0].replace(/-/g, '_');

if (name) {
  fs.copySync(__dirname + "/template", name);
  fs.moveSync(name + "/gitignore", name + "/.gitignore");
  fs.moveSync(name + "/src/NAME", name + "/src/" + dir);
  replace.sync({
    "files": [
      args[0] + "/**/**",
      args[0] + "/src/" + dir + "/*.cljs",
      args[0] + "/public/*"
    ],
    "from": "NAME",
    "to": name,
    "countMatches": true,
  });
  exec("cd " + name + "; git init");
  console.error("Project created in ./" + name);
  console.error("To get started:")
  console.error("$ cd " + name);
  console.error("$ make watch");
} else {
  console.error("Usage: shadowfront APP-NAME");
}
