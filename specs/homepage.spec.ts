import { CustomerServices } from "../page_objects/CustomerServices";
import { MainPage } from "../page_objects/MainPage";
import { browser } from "protractor";

describe("WDIO tests - ", function() {
  afterEach(async function() {
    await browser.manage().deleteAllCookies();
  });

  it("Customer Service can be opened by click on Button", async function() {
    await MainPage.open("/");
    await MainPage.openCustomerSerives();
    await CustomerServices.checkCustomerServicesIsOpened();
  });

  it("Can Send message to Customer Service", async function() {
    await CustomerServices.open("/customer-service-s-0");
    await CustomerServices.setMessageName("TestMessage");
    await CustomerServices.setEmailAdress("test@test.com");
    await CustomerServices.setMessageSubject("Test subject");
    await CustomerServices.setMessageText("This is a test message.");
    await CustomerServices.clickSendButton();
    await CustomerServices.checkMessageIsSent();
  });
  it("Customer Service contain service information", async function() {
    await CustomerServices.open("/customer-service-s-0");
    await CustomerServices.selectSection("Cookie Policy");
    await CustomerServices.checkCustomerSectionIsOpened("Cookie Policy");
    await CustomerServices.selectSection("Delivery Information");
    await CustomerServices.checkCustomerSectionIsOpened("Delivery Information");
    await CustomerServices.selectSection("Newsletter");
    await CustomerServices.checkCustomerSectionIsOpened("Newsletter");
    await CustomerServices.selectSection("Privacy Policy");
    await CustomerServices.checkCustomerSectionIsOpened("Privacy Policy");
    await CustomerServices.selectSection("Terms & Conditions");
    await CustomerServices.checkCustomerSectionIsOpened("Terms & Conditions");
  });
});
