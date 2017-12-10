const chalk = require("chalk");

const SOUTHWEST_URL =
  "https://www.southwest.com/flight/retrieveCheckinDoc.html?int=HOME-BOOKING-WIDGET-AIR-CHECKIN#js-booking-panel-check-in";

const error = message => {
  console.log(chalk`{red ${message}}`);
};

const success = message => {
  console.log(chalk`{greenBright.bold ${message}}`);
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = {
  SOUTHWEST_URL,
  error,
  sleep
};
