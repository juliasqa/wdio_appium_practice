const {config} = require('./wdio.shared.conf')
const path = require('path');

// ====================
// Runner Configuration
// ====================
//
config.port = 4723

// ==================
// Specify Test Files
// ==================
config.specs = [
    './test/specs/ios/ios-todolist.spec.js'
]

// ============
// Capabilities
// ============
config.capabilities = [
    {
        platformName: "ios",
        "appium:platformVersion": "15.2",
        "appium:deviceName": "iPhone 13",
        "appium:automationName": "XCUITest",
        "appium:app": path.join(process.cwd(), "./app/ios/MVCTodo.app")
    }
]

// Test runner services
config.services = ['appium']

exports.config = config;