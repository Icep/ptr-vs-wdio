import { BasePO } from "./base";
import { browser, $, $$, protractor } from "protractor";

export class MainPagePO extends BasePO {
  public EC = protractor.ExpectedConditions;
  //Top Menu
  public btnCustomerService = $("#default-menu .customer-service");

  async openCustomerSerives() {
    await browser.wait(this.EC.visibilityOf(this.btnCustomerService), 5000);
    await this.btnCustomerService.click();
  }
}

export const MainPage = new MainPagePO();
