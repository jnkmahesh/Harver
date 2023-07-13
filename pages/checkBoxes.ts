import { expect, Locator, Page } from '@playwright/test';

export class CheckBoxes {
    readonly page: Page;
    readonly checkBoxes1: Locator;
    readonly checkBoxes2: Locator;

    constructor(page: Page) {
        this.page = page;
        this.checkBoxes1 = page.locator('[id="checkboxes"]>input');
        this.checkBoxes2 = page.locator('checkbox',{hasText: ' checkbox 2'});
    }
    async selectCheckBox1(){
        await this.checkBoxes1.first().click();
    }
    async verifyCheckBoxChecked(){
        await expect(this.checkBoxes1.first()).toBeChecked();
        await this.page.waitForTimeout(2000);        
    }
    async unselectCheckBox2(){
        await this.checkBoxes1.last().click();
    }
    async verifyCheckBoxWasUnselected(){
        await expect(this.checkBoxes1.last()).not.toBeChecked();
        await this.page.waitForTimeout(2000);
    }
}