//import electron from "electron";
const {_electron: electron } = require('@playwright/test');
//import { Application } from "spectron";

const beforeEach = async function() {

  const electronApp = await electron.launch({
    args: ["."],
    chromeDriverArgs: ["remote-debugging-port=9222"]
  });

  return electronApp;
};

const afterEach = async function(electronApp) {
  await electronApp.close();
}

/*
// Old Spectron example tests
const beforeEach = function() {
  this.timeout(10000);

  this.app = new Application({
    path: electron,
    args: ["."],
    chromeDriverArgs: ["remote-debugging-port=9222"]
  });
  return this.app.start();
};

const afterEach = function(app) {
  this.timeout(10000);
  if (this.app && this.app.isRunning()) {
    return this.app.stop();
  }
  console.error("this.app is not valid or is not running");
  return true;
};
*/

export default {
  beforeEach,
  afterEach
};
