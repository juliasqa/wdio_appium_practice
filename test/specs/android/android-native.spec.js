const { driverConfig } = require("appium/build/lib/cli/args")

describe('Android Native Features Test', () => {
    it('Start App Activity', async () => {
        // Navigate to Alert Dialog directly
        await driver.startActivity("io.appium.android.apis",".app.AlertDialogSamples");

        // pause 3 seconds
        await driver.pause(3000);

        // assert
        await expect($('//android.widget.TextView[@text="App/Alert Dialogs"]')).toBeExisting();

        await $('//android.widget.Button[@content-desc="OK Cancel dialog with a message"]').click();

        driver.pause(3000);
        // await driver.acceptAlert();
        // await expect($('//android.widget.TextView[@resource-id="android:id/alertTitle"]')).not.toExist();
        const alertText = await driver.getAlertText();

        await expect(alertText).toContain('Lorem ipsum dolor sit aie consectetur adipiscing\Plloaso mako nuto siwuf cakso dodtos anr koop.');
    })

    it('Scroll Item', async () => {
        await $('~App').click();
        await $('~Activity').click();
        
        // vertical scrolling - scrollToEnd - less stable
        // await $('android=new UiScrollable(new UiSelector()).scrollToEnd(1,5)');
        // await $('~Secure Surfaces').click();

        // scrollToEnd - more stable
        await $('android=new UiScrollable(new UiSelector()).scrollTextIntoView("Secure Surfaces")').click();
    })

    it.only('Scroll Item', async () => {
        await driver.startActivity("io.appium.android.apis",".view.Gallery1");

        // Horizontal scrolling
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');

        await driver.pause(3000);
    })
})