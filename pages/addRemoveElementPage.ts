import { expect, Locator, Page } from '@playwright/test';

export class AddRemoveElementsPage {
    readonly page: Page;
    readonly addElemntBtn: Locator;
    readonly removeBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addElemntBtn = page.locator('button', { hasText: 'Add Element' });
        this.removeBtn = page.locator('button', { hasText: 'Delete' });
    }
    async clickOnAddElementBtton() {
        await this.addElemntBtn.click();
        await expect(this.removeBtn).toBeVisible();
    }
    async verifyDeleteButtonAddedSuccessfully(){
        await expect(this.removeBtn).toBeVisible();
    } 
    async clickOnRemoveButton() {
        await this.removeBtn.click();
        await expect(this.removeBtn).not.toBeVisible();
    }
    async verifyDeleteButtonRemovedSuccessfully(){
        await expect(this.removeBtn).not.toBeVisible();
    }
}
