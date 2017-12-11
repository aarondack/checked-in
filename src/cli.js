#!/usr/bin/env node

const cli = require("commander");
const checkIn = require("./index");

cli
  .version("0.1.0")
  .option(
    "-c, --confirmationNumber <confirmationNumber>",
    "Flight confirmation number"
  )
  .option("-d, --date <date>", "Date of flight")
  .option("-f, --firstName <name>", "Your first name")
  .option("-l, --lastName <name>", "Your last name")
  .option("-p, --phoneNumber <num>", "Your phone number")
  .parse(process.argv);

checkIn(cli);
