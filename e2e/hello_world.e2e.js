import { expect } from "chai";
import testUtils from "./utils";
const {_electron: electron } = require('@playwright/test');

describe("application launch", function() {
  let app;
  beforeEach(async() => {
    app = await electron.launch({
      args: ["."],
      chromeDriverArgs: ["remote-debugging-port=9222"]
    });
  });

  afterEach(async() => {
    await app.close();
  });

  it("shows hello world text on screen after launch", async() => {
    const window = await app.firstWindow();
    window.$("#greet").then(element => {
      return element.getText().then(text => {
        expect(text).to.equal("Hello World!");
      })
    })
  });
});
