// https://www.selenium.dev/selenium/docs/api/javascript/index.html
// https://github.com/SeleniumHQ/selenium/issues/4075

const {Builder, By, Key, until} = require('selenium-webdriver');

( async () => {
    //Launch the browser
    let driver = await new Builder().forBrowser('chrome').build();

    await driver.get('https://www.office.com/?auth=1');
    await driver.findElement(By.css('[name="loginfmt"]'))
        .then((el) => {
            console.log("Found Email element");
            el.sendKeys('divyaes@outlook.com')
        })
        .catch((err) => {
            console.log("Cannot find email element");
            throw err;
        });
        //await driver.sleep(20000);
    // await driver.findElement(By.id('signup')).getText()
    //     .then((text) => {
    //         console.log(text);
    //     })
    //     .catch((err) => {
    //         console.log(`Cannot get the signup text ${err}`);
    //     });
    ////Next button(AFter entering Email)
    await driver.findElement(By.css('[type="submit"')).click();

    await driver.findElement(By.css('[type="password"]'))
        .then((el) => {
            console.log("Found Pwd element");
            el.sendKeys('sriGadiMS1125');          
        })
        .catch((err) => {
            console.log("Cannot find Pwd element");
            throw err;
        });
    
    await driver.sleep(1000);

    await driver.findElement(By.css('[type="password"]'))
        .then((el) => {
            console.log("Found Pwd element for entering");
            el.sendKeys(Key.ENTER);          
        })
        .catch((err) => {
            console.log("Cannot find Pwd element for entering");
            throw err;
        });
    await driver.findElement(By.id('idSIButton9'))
        .then((el) => {
            console.log("SIGN IN BY ID IS FOUND");
            el.click();
        })
        .catch((err) => {
            console.log("SIGN IN BY ID IS NOT FOUND");
            throw err;
        });

//    await driver.findElement(By.linkText('Excel'))
await driver.wait(until.elementLocated(By.xpath('//*[@id="officeHome__content"]/ohp-home/div/ohp-app-tiles-section/div/div/ohp-app-tiles-list/div/div/div/div/div[5]/ohp-app-tile/div')), 8000)
//await driver.findElement(By.xpath('//*[@id="officeHome__content"]/ohp-home/div/ohp-app-tiles-section/div/div/ohp-app-tiles-list/div/div/div/div/div[5]/ohp-app-tile/div'))
        .then((el) => {
            console.log("Excel IS FOUND");            
            el.click();
        })
        .catch((err) => {
            driver.sleep(7000);
            console.log("Excel IS NOT FOUND");
            throw err;
        });
    //await driver.sleep(10000);
    //await driver.findElement(By.xpath('//*[@id="officeHome__content"]/ohp-wac-start/div/div/div[2]/div/div[1]/ohp-template-item/a'))
    await driver.wait(until.elementLocated(By.xpath('//*[@id="officeHome__content"]/ohp-wac-start/div/div/div[2]/div/div[1]/ohp-template-item/a/div[1]')), 8000)
    //await driver.findElement(By.xpath('//*[@id="officeHome__content"]/ohp-wac-start/div/div/div[2]/div/div[1]/ohp-template-item/a/div[1]'))
        .then((el) => {
            console.log("New blank workbook IS FOUND");
            el.click();
        })
        .catch((err) => {
            console.log("New blank workbook IS NOT FOUND");
            throw err;
        });
    /* var signInEle = await driver.findElement(By.css('[type="submit"'));
    signInEle.click(); */
    /* const signInEle = await driver.findElement(By.css('[type="submit"'));
    await driver.wait(until.elementLocated(signInEle), 6000)
        .then(async (el) => {
            console.log("Found sign in");
            await driver.sleep(3000);
            await el.isEnabled().then(() => {
                console.log("Enabled");
            })
            .catch((err) => {
                console.log("not Enabled ======");
                console.log(err);
            });
            await el.click().then(() => {
                console.log("clicked");
            })
            .catch((err) => {
                console.log("CANNOT CLICK");
                console.log(err);
            });
            //el.sendKeys(Key.ENTER);
        })
        .catch((err) => {
            console.log("=========================Error in findgin sign in element");
            console.log(err);
        });
 */
    /* await driver.wait(until.elementLocated(By.css('.inline-block')), 2000)
        .then((el) => {
            console.log("Found sign's parent");
            console.log(el);
            driver.sleep(3000);
            el.click();
        }); */
    //await driver.findElement(By.css('[type="submit"')).click();
    // await driver.findElement(By.css('[type="submit'))
    //     .then((el) => {
    //         console.log(`FOund sign in button`);
    //         //el.click();
    //         el.sendKeys(Key.ENTER);
    //     })
    //     .catch((err) => {
    //         console.log(`Error while finding Sign in button ${err}`);
    //     })
        //.sendKeys(Key.ENTER);
    await driver.sleep(100000);
    await driver.quit();
})();
