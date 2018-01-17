#!/usr/bin/env node

const cli = require("commander");
const checkIn = require("./index");
const chalk = require("chalk");

cli
  .version("0.1.0")
  .description(
    chalk`{yellow.bold ${"Schedule your ✈️  check-ins from the comfort of your command line."}}`
  )
  .option(
    "-c, --confirmationNumber <confirmationNumber>",
    "Flight confirmation number"
  )
  .option("-d, --date <date>", "Date of flight")
  .option("-f, --firstName <name>", "Your first name")
  .option("-l, --lastName <name>", "Your last name")
  .option("-p, --phoneNumber <phone>", "Your phone number");

cli.on("--help", () => {
  console.log("");
  console.log(" Examples:");
  console.log(
    `
      For instance you can schedule your Southwest flight as follows: 
      ${chalk`{cyan.bold ${"checked-in -d 10/27/2018 -f Aaron -l Dack -p 1238763456"}}`}

      Or if you prefer to be more verbose:
      ${chalk`{cyan.bold ${"checked-in --date 10/27/2018 --firstName Aaron --lastName Dack --phoneNumber 1238763456"}}`}
    `
  );
});

cli.parse(process.argv);

if (!process.argv.slice(6).length) {
  cli.help();
}

if (process.argv.length === 2) cli.help();

checkIn(cli);
