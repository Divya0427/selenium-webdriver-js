// https://www.selenium.dev/selenium/docs/api/javascript/index.html
//Modify like this

const {Builder, By, Key, until} = require('selenium-webdriver');


var driver = new Builder().forBrowser('chrome').build();

driver.get('https://www.office.com/?auth=1');
//Most of these methods returns a promise; we can extract the value from it.
driver.findElement(By.css('[name="loginfmt"]')).sendKeys('divyaes@outlook.com')
    .then((el) => {
        console.log("Found Email element");
    })
    .catch((err) => {
        console.log("Cannot find email element");
        throw err;
    });

driver.findElement(By.id('signup')).getText()
    .then((text) => {
        console.log(text);
    })
    .catch((err) => {
        console.log(`Cannot get the signup text ${err}`);
    });
//Next button(AFter entering Email)
driver.findElement(By.css('[type="submit"')).click();

driver.findElement(By.css('[type="password"]'))
    .then((el) => {
        console.log("Found Pwd element");
        el.sendKeys('sriGadiMS1125');
        driver.findElement(By.css('[type="submit')).then(() => {
            console.log(`Found sign in button`);
        })
        .catch((err) => {
            console.log(`Error while finding Sign in button ${err}`);
        })
    })
    .catch((err) => {
        console.log("Cannot find Pwd element");
        throw err;
    });
//Sign in button
//driver.findElement(By.className('btn-primary'))
    // .then((el) => {
    //     console.log("Found Sign in button");
    // })
    // .catch((err) => {
    //     console.log(`Cannot find Sign in button ${err}`);
    // })
    driver.findElement(By.css('[type="submit')).then(() => {
        console.log(`FOund sign in button`);
    })
    .catch((err) => {
        console.log(`Error while finding Sign in button ${err}`);
    })
    //.sendKeys(Key.ENTER);
    //.click();
    

driver.sleep(20000);
//driver.quit();


//driver.wait(until.elementLocated(By.css('.alert-success')), 5000),getText().then( (txt) => {
//console.log(txt);
//});

//driver.wait( () => {
// return submitBtn.isEnabled();
//}, 10000);
