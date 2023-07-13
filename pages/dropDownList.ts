import { expect, Locator, Page } from '@playwright/test';

export class DropdownList {
    readonly page: Page;
    readonly dropDown: Locator;
    readonly option1: Locator;
    readonly option2: Locator;

    constructor(page: Page) {
        this.page = page;
        this.dropDown = page.locator('[id="dropdown"]');
        this.option1 = page.locator('#dropdown');
        this.option2 = page.locator('[id="dropdown"]>option:nth-child(2)');
    }

    async clickOnDroopDown(){
        await this.dropDown.click();
    }
    async selectOtion1(){
        await (this.option1.selectOption('1'));
    }
    async selectOtion2(){
        await this.option2.click();
    }
    async verifyOption1selected(){
        await expect(this.option1).toBeVisible();
        await this.page.waitForTimeout(2000);
    }
}