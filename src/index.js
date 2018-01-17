const puppeteer = require("puppeteer");
const utils = require("./utils.js");
const { DateTime } = require("luxon");
const CronJob = require("cron").CronJob;

function main(args) {
  const { confirmationNumber, date, firstName, lastName, phoneNumber } = args;
  if (date) {
    try {
      const job = new CronJob({
        date,
        onTick: () =>
          checkIn(confirmationNumber, firstName, lastName, phoneNumber),
        start: true
      });

      utils.success(
        "You have successfully scheduled your check-in. Have fun in the window or aisle!"
      );
    } catch (error) {
      utils.error(error);
    }
  }
}

async function checkIn(confirmationNumber, firstName, lastName, phoneNumber) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(utils.SOUTHWEST_URL, { waitUntil: "networkidle2" });

  await page.type("#confirmationNumber", confirmationNumber, { delay: 100 });
  await page.type("#passengerFirstName", firstName, { delay: 100 });
  await page.type("#passengerLastName", lastName, { delay: 100 });

  await page.click("#form-mixin--submit-button", { delay: 100 });

  await utils.sleep(8000);
  await page.click(".air-check-in-review-results--check-in-button", {
    delay: 100
  });

  await utils.sleep(8000);

  await page.click(".boarding-pass-options--button-text", { delay: 500 });
  await page.type("#textBoardingPass", phoneNumber, { delay: 100 });
  await page.click("#form-mixin--submit-button", { delay: 200 });
  await browser.close();
}

module.exports = main;
