const { Builder, By, until } = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;
const mocha = require('mocha');
const path = require('path');

const { describe, it, before, after } = mocha;

describe('Article CRUD UI Tests', function () {
    this.timeout(30000);

    let driver;

    // Path into your project directory
    // windows : 'file://path/to/your/project/'
    // mac : 'file:/path/to/your/project/'
    const baseUrl = 'file:/Users/budie-arie-menko/blokir-judol/pengujian/';

    before(async () => {
        driver = await new Builder().forBrowser('chrome').build();
    });

    after(async () => {
        await driver.quit();
    });

    //To-Do: Implement "Load Article List" Test

    //To-Do: Implement "Create New Article" Test

    //To-Do: Implement "Edit Existing Article" Test

    //To-Do: Implement "View Article" Test

    //To-Do: Implement "Delete Article" Test
});
