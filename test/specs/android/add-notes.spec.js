// const { default: driverConfig } = require("appium/build/lib/driver-config")

describe('test add notes', async () => {
    it('skip tutorials', async () => {
        const skipButton = await $('//*[@text="SKIP"]');
       await skipButton.click();
       expect($('//*[@text="Add note"]')).toBeExisting();

       await $('//*[@text="Add note"]').click();

       await $('//*[@text="Text"]').click();


       await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').addValue("Minions\nTigers\Lions");

       driver.back();
       driver.back();

    //    await $('//*[@text="com.socialnmobile.dictapps.notepad.color.note:id/title"]').click();
    })
})