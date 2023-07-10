import { expect, Locator, Page } from '@playwright/test';

export class FileUploader {
    readonly page: Page;
    readonly uploadButton: Locator;
    readonly chooseFile: Locator;
    readonly fileUploadedSuccessMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uploadButton = page.locator('[value="Upload"]');
        this.chooseFile = page.locator('#file-upload');
        this.fileUploadedSuccessMessage = page.locator('h3')
    }
    async uploadFile(fileName){
        const filePath = 'Files/'+fileName+'.txt';
        await this.chooseFile.setInputFiles(filePath);
        await this.uploadButton.click();
    }

    async verifyuploadFileSuccess(){
        await expect(this.fileUploadedSuccessMessage).toBeVisible()
    }
}