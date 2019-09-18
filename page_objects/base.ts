import { browser } from "protractor";

export class BasePO {
  protected url: string = ""; // Will be same as baseUrl by default.

  async open(url) {
    await browser.waitForAngularEnabled(false);
    return await browser.get(url);
  }
}
