#!/usr/bin/env node
"use strict";

//@ts-ignore
let pkg = require("../package.json");
//@ts-ignore
let sdkPkg = require("dashsight/package.json");

function printVersion() {
  console.info(`${pkg.name} v${pkg.version} SDK v${sdkPkg.version}`);
}

async function main() {
  require("dotenv").config({ path: ".env" });

  let dashsightUrl = removeArg(process.argv, "--api-url");
  process.env.INSIGHT_BASE_URL = dashsightUrl || "https://insight.dash.org";
  if (process.env.INSIGHT_BASE_URL.endsWith("/")) {
    process.env.INSIGHT_BASE_URL = process.env.INSIGHT_BASE_URL.slice(0, -1);
  }

  let subcommand = process.argv.splice(2, 1)[0];

  if (!subcommand || ["help", "--help"].includes(subcommand)) {
    printVersion();
    console.error();
    console.error("Usage:");
    console.error("    dashsight <subcommand> [...]");
    console.error();
    console.error("Subcommands:");
    console.error(`    help`);
    console.error(`    version`);
    console.error();
    Object.keys(sdkPkg.bin).forEach(function (cmd) {
      // remove 'dashsight-' prefix
      let sub = cmd.slice("dashsight-".length);
      console.error(`    ${sub}`);
    });
    console.error();
    process.exit(1);
    return;
  }

  if (["version", "-V", "--version"].includes(subcommand)) {
    printVersion();
    process.exit(0);
    return;
  }

  require(`dashsight/bin/${subcommand}.js`);
}

/**
 * @param {Array<any>} arr
 * @param {any} item
 */
function removeArg(arr, item) {
  // TODO support --foo=bar also
  let index = arr.indexOf(item);
  if (index >= 0) {
    return arr.splice(index, 2)[1];
  }
  return null;
}

main()
  .then(function () {
    // this is handled by the subcommand
    //process.exit(0);
  })
  .catch(function (err) {
    console.error(err);
    process.exit(1);
  });
