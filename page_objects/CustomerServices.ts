import { BasePO } from "./base";
import { browser, $, $$, protractor, element, by } from "protractor";

export class CustomerServicesPO extends BasePO {
  public EC = protractor.ExpectedConditions;

  //Contact Us form
  public inName = $('#box-contact-us [name="name"]');
  public inEmailAdress = $('#box-contact-us [name="email"]');
  public inSubject = $('#box-contact-us [name="subject"]');
  public inMessage = $("#box-contact-us textarea");
  public btnSend = $("#box-contact-us [name='send']");
  public alertSuccess = $(".alert-success");
  public sectionHeader = $("#box-customer-service h1");

  async checkCustomerServicesIsOpened() {
    let text = await $("#box-information-links .title").getText();
    expect(text).toEqual("Customer Service");
  }

  async checkMessageIsSent() {
    await browser.wait(this.EC.visibilityOf(this.alertSuccess), 5000);
    let text = await this.alertSuccess.getText();
    expect(text).toContain("Your email has successfully been sent");
  }

  async setMessageName(value: string) {
    await browser.wait(this.EC.visibilityOf(this.inName), 5000);
    await this.inName.click();
    await this.inName.clear();
    await browser.sleep(50);
    await this.inName.sendKeys(value);
  }
  async setEmailAdress(value: string) {
    await browser.wait(this.EC.visibilityOf(this.inEmailAdress), 5000);
    await this.inEmailAdress.click();
    await this.inEmailAdress.clear();
    await browser.sleep(50);
    await this.inEmailAdress.sendKeys(value);
  }
  async setMessageSubject(value: string) {
    await browser.wait(this.EC.visibilityOf(this.inSubject), 5000);
    await this.inSubject.click();
    await this.inSubject.clear();
    await browser.sleep(50);
    await this.inSubject.sendKeys(value);
  }
  async setMessageText(value: string) {
    await browser.wait(this.EC.visibilityOf(this.inMessage), 5000);
    await this.inMessage.click();
    await this.inMessage.clear();
    await browser.sleep(50);
    await this.inMessage.sendKeys(value);
  }
  async clickSendButton() {
    await browser.wait(this.EC.visibilityOf(this.btnSend), 5000);
    await this.btnSend.click();
  }
  async selectSection(text) {
    await browser.wait(this.EC.visibilityOf(element(by.cssContainingText('#box-information-links a', text))), 5000);
    await element(by.cssContainingText('#box-information-links a', text)).click();
    await browser.sleep(50);
  }

  async checkCustomerSectionIsOpened(text) {
    await browser.wait(this.EC.visibilityOf(this.sectionHeader), 5000);
    let textFromHeader = await this.sectionHeader.getText();
    expect(text).toEqual(textFromHeader);
  }
}

export const CustomerServices = new CustomerServicesPO();
