require('dotenv').config();
const {config} = require('./wdio.shared.conf');

// Browserstack credentials
config.user = 'juliatran_Sg1Ukx'
config.key = 'MXP2qyc8fpjJXJ1pJ2px'

// ==================
// Specify Test Files
// ==================
config.specs = [
    './test/specs/android/add-notes.spec.js'
]

config.capabilities = [
    {
        platformName: "Android",
        "appium:platformVersion": "10.0",
        "appium:deviceName": "Google Pixel 3",
        "appium:automationName": "UIAutomator2",
        "appium:app": "bs://fcd321fc489394cdaba9a7de66672faa5c6dc0a8"
    },
]

// Test runner services
config.services = ['browserstack']

exports.config = config;