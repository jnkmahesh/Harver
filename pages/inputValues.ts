import { expect, Locator, Page } from '@playwright/test';

export class InputValues {
    readonly page: Page;
    readonly inputNumberField: Locator;

    constructor(page: Page) {
        this.page = page;
        this.inputNumberField = page.locator('[class="example"]>input');
    }
    async enterValueToTextField(randomValue) {
        await this.inputNumberField.fill(randomValue);
        await this.inputNumberField.type('Tab');
    }
    async verifyNumbersWereAdded() {
        await expect(this.inputNumberField).toBeTruthy();
        await this.page.waitForTimeout(2000);
    }
}