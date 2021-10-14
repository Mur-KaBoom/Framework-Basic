exports.config = {
    framework: 'mocha',
    mochaOpts: {
        timeout: 10000,
        reporter: 'mochawesome',
        reporterOptions: {
            reportFilename: "report",
            charts: true,
            autoOpen: true,
        },
    },
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs : ['../specs/*.spec.js'],
    capabilities: {
        browserName : 'chrome',
        chromeOptions: {
            args: ['--window-size=1920,1080']
        },
        // shardTestFiles: true,
        // maxInstances: 2
    },
}