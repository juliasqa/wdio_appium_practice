describe('Find Android Elements', () => {
    xit('Find element by accessiblity id', async () => {
        // locate element by accessibly id
        const appOption = await $('~App');

        // tap on it
        await appOption.click();

        // assertion
        const actionBar = await $('~Action Bar');
        await expect(actionBar).toBeExisting();
    })

    xit('Find element by class name', async () => {
        // find element by class name
        const className = await $('android.widget.TextView');
        console.log(className.getText());

        // assertion
        await expect(className).toHaveText('API Demoss');
    })

    xit('Find element by xpath', async () => {
        // locate element by accessibly id
        const appOption = await $('~App');

        // tap on it
        await appOption.click();

        // find element by xpath
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();

        // find element by resource-id
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();

        // find element by text
        await $('//android.widget.TextView[@text="Command two"]').click();

        // find element by class
        const selectedElement = await $('android.widget.TextView');
        await expect(selectedElement).toHaveText('You selected: 1 , Command two');
    })

    xit('Find multiple elements', async () => {
        const expectedList = [
            "API Demos",
            "Access'ibility",
            "Accessibility",
            "Animation",
            "App",
            "Content",
            "Graphics",
            "Media",
            "NFC",
            "OS",
            "Preference",
             "Text",
            "Views",
            ];
        const actualList = [];

        // find elements
        const elementList = await $$('android.widget.TextView');

        // loop thru the list
        for (const element of elementList) {
            actualList.push(await element.getText());
        }

        // assertion
        await expect(actualList).toEqual(expectedList);
    })

    xit('text input', async () => {
        await $('~Views').click();
        await $('~Auto Complete').click();
        await $('~1. Screen Top').click();

        const countryElement = await $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/edit"]');

        await countryElement.setValue('Canada');

        await expect(countryElement).toHaveText('Canada');
    })
})

