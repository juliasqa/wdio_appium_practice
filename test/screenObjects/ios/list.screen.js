class ListScreen {
    get createListBtn() {
        return $('//*[@name="Create list"]');
    }
    get itemListInput() {
        return $('//*[@value="List Name"]');
    }
    get createBtn() {
        return $('~Create');
    }
    listNameField(name) {
        return $(`${name}`)
    }
}

export default new ListScreen();