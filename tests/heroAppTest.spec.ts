

const { test, expect } = require('@playwright/test');
const { CommonOptions } = require('../pages/commonOptions.ts');
const {AddRemoveElementsPage} = require('../pages/addRemoveElementPage.ts');
const {InputValues} = require('../pages/inputValues.ts');
const {CheckBoxes} =require('../pages/checkBoxes.ts');
const {DropdownList} =require('../pages/dropDownList.ts');
const {FileUploader} = require('../pages/fileUploader.ts');

test('verify Add element functionality', async ({ page }) => {
    const commonOptions =  new CommonOptions(page);
    const addRemoveElementPage = new AddRemoveElementsPage(page);

    await commonOptions.navigate();
    await commonOptions.clickOnAddRemoveElement();
    await addRemoveElementPage.clickOnAddElementBtton();
    await addRemoveElementPage.verifyDeleteButtonAddedSuccessfully();
    await addRemoveElementPage.clickOnRemoveButton();
    await addRemoveElementPage.verifyDeleteButtonRemovedSuccessfully();
});

test('Verify user can add values to a text field', async({page})=>{
    const commonOptions = new CommonOptions(page)
    const inputValues = new InputValues(page)
    const randomValue = '23'

    await commonOptions.navigate();
    await commonOptions.clickOnInputs();
    await inputValues.enterValueToTextField(randomValue);
    await inputValues.verifyNumbersWereAdded();
})
test('Verify user can select CheckBxes', async({page})=>{
    const commonOptions = new CommonOptions(page)
    const checkBoxes = new CheckBoxes(page)

    await commonOptions.navigate();
    await commonOptions.clickOnCheckBoxes();
    await checkBoxes.selectCheckBox1();
    await checkBoxes.verifyCheckBoxChecked();
    await checkBoxes.unselectCheckBox2();
    await checkBoxes.verifyCheckBoxWasUnselected();
})
test('Verify user can select dropDownOptions', async({page})=>{
    const commonOptions = new CommonOptions(page)
    const dropDownList = new DropdownList(page)

    await commonOptions.navigate();
    await commonOptions.clickOnDropDown();
    await dropDownList.clickOnDroopDown();
    await dropDownList.selectOtion1();
    await dropDownList.verifyOption1selected();
})
test('Verify file Uploader', async({page})=>{
    const commonOptions = new CommonOptions(page)
    const fileUploader = new FileUploader(page)
    const fileName = 'ex'

    await commonOptions.navigate();
    await commonOptions.clickOnUpload();
    await fileUploader.uploadFile(fileName);
    await fileUploader.verifyuploadFileSuccess();
})