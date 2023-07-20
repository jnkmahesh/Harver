

import { test, expect } from '@playwright/test';

const { CommonOptions } = require('../pages/commonOptions.ts');
const { AddRemoveElements } = require('../pages/addRemoveElements.ts');
const { InputValues } = require('../pages/inputValues.ts');
const { CheckBoxes } = require('../pages/checkBoxes.ts');
const { DropdownList } = require('../pages/dropDownList.ts');
const { FileUploader } = require('../pages/fileUploader.ts');


test.describe('the-internet.herokuapp element related test set', () => {
    test('Verify that user can add an element and remove successfully', async ({ page }) => {
        const commonOptions = new CommonOptions(page);
        const addRemoveElementPage = new AddRemoveElements(page);

        await commonOptions.navigate();
        await commonOptions.clickOnAddRemoveElement();
        await addRemoveElementPage.clickOnAddElementBtton();
        await addRemoveElementPage.verifyDeleteButtonAddedSuccessfully();
        await addRemoveElementPage.clickOnRemoveButton();
        await addRemoveElementPage.verifyDeleteButtonRemovedSuccessfully();
    });

    test('Verify user able to add numeric values in the given text field', async ({ page }) => {
        const commonOptions = new CommonOptions(page)
        const inputValues = new InputValues(page)
        const randomValue = '23'

        await commonOptions.navigate();
        await commonOptions.clickOnInputs();
        await inputValues.enterValueToTextField(randomValue);
        await inputValues.verifyNumbersWereAdded();
    })
    test('Verify user able to che and uncheck the checkboxes without any issues', async ({ page }) => {
        const commonOptions = new CommonOptions(page)
        const checkBoxes = new CheckBoxes(page)

        await commonOptions.navigate();
        await commonOptions.clickOnCheckBoxes();
        await checkBoxes.selectCheckBox1();
        await checkBoxes.verifyCheckBoxChecked();
        await checkBoxes.unselectCheckBox2();
        await checkBoxes.verifyCheckBoxWasUnselected();
    })
    test('Verify user able to select the options given in the Dropdown list', async ({ page }) => {
        const commonOptions = new CommonOptions(page)
        const dropDownList = new DropdownList(page)

        await commonOptions.navigate();
        await commonOptions.clickOnDropDown();
        await dropDownList.clickOnDroopDown();
        await dropDownList.selectOtion1();
        await dropDownList.verifyOption1selected();
    })
    test('Verify user able to upload a file to a given location', async ({ page }) => {
        const commonOptions = new CommonOptions(page)
        const fileUploader = new FileUploader(page)
        const fileName = 'ex'

        await commonOptions.navigate();
        await commonOptions.clickOnUpload();
        await fileUploader.uploadFile(fileName);
        await fileUploader.verifyuploadFileSuccess();
    })
})