import listScreen from '../../screenObjects/ios/list.screen'; 

describe('To do MVC', async () => {
    it('Create todo', async () => {
        await listScreen.createListBtn.click()

        await listScreen.itemListInput.addValue('hello julia')
        
        await listScreen.createBtn.click()
        driver.pause(5000)

        await expect(await listScreen.listNameField('hello julia')).toBeExisting()

        await $('~hello julia').click()
        await $('//*[@name="Create item"]').click()

        await $('//*[@value="Title"]').addValue('hello hello julia')
        await $('//*[@value="Due"]').addValue('28/02/2022')
        await $('~Create').click()

        await expect(await listScreen.listNameField('hello hello julia')).toBeExisting()
    })
})