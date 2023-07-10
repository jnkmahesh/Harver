import { expect, Locator, Page } from '@playwright/test';

export class CommonOptions {
  readonly page: Page;
  readonly addRemoveElementPage: Locator;
  readonly baseURL: string;
  readonly inputValues: Locator;
  readonly checkBoxes: Locator;
  readonly dropDown: Locator;
  readonly fileuploader:Locator;

  constructor(page: Page) {
    this.page = page;
    this.addRemoveElementPage = page.locator('a', { hasText: 'Add/Remove Elements' });
    this.inputValues = page.locator('a',{hasText: 'Inputs'})
    this.checkBoxes = page.locator('a',{hasText: 'checkboxes'})
    this.dropDown = page.locator('a',{hasText: 'Dropdown'})
    this.fileuploader = page.locator('a',{hasText: 'File Upload'})
    this.baseURL = '/'
  }

  async navigate() {
    await this.page.goto(this.baseURL);
  }
  async clickOnAddRemoveElement() {
    await this.addRemoveElementPage.click();
  }
  async clickOnInputs(){
    await this.inputValues.click()
  }
  async clickOnCheckBoxes(){
    await this.checkBoxes.click()
  }
  async clickOnDropDown(){
    await this.dropDown.click()
  }
  async clickOnUpload(){
    await this.fileuploader.click()

  }
}