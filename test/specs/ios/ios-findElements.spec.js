// const { driverConfig } = require("appium/build/lib/cli/args");

describe('ios - find elements', async () => {
    it('find elements', async () => {
        await $('~Alert Views').click();
        await $('~Simple').click();
        await expect(await driver.getAlertText()).toContain('A Short Title Is Best');
    })

    it('find by tag name', async () => {
        const expectList = ["UIKitCatalog","Activity Indicators","ActivityIndicatorViewController","Alert Views","AlertControllerViewController","Buttons","ButtonViewController","Date Picker","DatePickerController","Image View","ImageViewController","Page Control", "PageControlViewController","Picker View","PickerViewController","Progress Views","ProgressViewController","Search","SearchViewControllers","Segmented Controls","SegmentedControlViewController","Sliders","SliderViewController","Stack Views","StackViewController","Steppers","StepperViewController","Switches","SwitchViewController","Text Fields","TextFieldViewController","Text View","TextViewController","Toolbars","ToolbarViewControllers","Web View","WebViewController"];
        const actualList = [];
        const allStaticText = await $$('XCUIElementTypeStaticText');
        for (const textEle of allStaticText) {
            actualList.push(await textEle.getText());
        }
        expect(actualList).toEqual(expectList);
    })

    it('find by -ios class chain', async () => {
        // const alertText = '**/XCUIElementTypeStaticText[`label == "Alert Views"`]';
        const alertText = '**/XCUIElementTypeStaticText[`label CONTAINS "Alert"`]';
        await $(`-ios class chain:${alertText}`).click();
        await $('~Simple').click();
        await expect(await driver.getAlertText()).toContain('A Short Title Is Best');
    })

    it('find by -ios predicate string', async () => {
        // const alertText = 'label == "Alert Views"';
        const alertText = 'label BEGINSWITH[c] "alert"';
        await $(`-ios predicate string:${alertText}`).click();
        await $('~Simple').click();
        await expect(await driver.getAlertText()).toContain('A Short Title Is Best');
    })
    it('scroll item', async () => {
        await $('~Picker View').click();

        // red
        const redColorComponentValue = await $('~Red color component value');
        await redColorComponentValue.click();
        await driver.execute('mobile: scroll', { element: redColorComponentValue.elementId, direction: "down"});

        driver.pause(5000);

        // green
        const greenColorComponentValue = await $('~Green color component value');
        await driver.execute('mobile: scroll', { element: greenColorComponentValue.elementId, direction: "up"});

        // blue
        const blueColorComponentValue = await $('~Blue color component value');
        await driver.execute('mobile: scroll', { element: blueColorComponentValue.elementId, direction: "down"});
        
        driver.pause(5000);
    })
    it.only('add value to date picker', async () => {
        await $('~Picker View').click();

        // red
        const redColorComponentValue = await $('~Red color component value');
        redColorComponentValue.addValue('125');
        // green
        const greenColorComponentValue = await $('~Green color component value');
        greenColorComponentValue.addValue('0');
        // blue
        const blueColorComponentValue = await $('~Blue color component value');
        blueColorComponentValue.addValue('125');
         
        driver.pause(5000);
    })
})