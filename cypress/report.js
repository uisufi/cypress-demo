const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: './cypress/cucumber-json/',
	reportPath: './cypress/cucumber-reports/',
	metadata:{
        browser: {
            name: 'chrome',
            version: '60'
        },
        device: 'Local test machine',
        platform: {
            name: 'Mac OS'
        }
    },
    customData: {
        title: 'Cypress Demo Reports',
        data: [
            {label: 'Demo', value: 'Custom project'},
        ]
    }
});
