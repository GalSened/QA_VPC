
const {Builder, By, Key, until} = require('selenium-webdriver');
var assert = require('chai').assert;
const webdriver = require('selenium-webdriver'); 
let driver = new webdriver.Builder().forBrowser('chrome').build();    


// Our test
describe('Test VPC auto',  () => {
    before(() => {
        driver.get('https://stg.oxs.co.il'); 
        driver.manage().window().maximize();  
    });

    after(() =>{
        //driver.close();
    })
    it('Testing right page',async  () => {
    // Set timeout to 10 seconds
    
        
        await driver.sleep(3000);
        let Title = await driver.getTitle();
        console.log(Title);
        let EnterSystem = await driver.findElement(By.xpath('//*[@id="view"]/div/header/div[2]/p')).getText();
        assert.equal(EnterSystem,'כניסה למערכת');

        
        // Find title and assert
        
    
    });

    it('Log in to demo company', async () => {
        
        await driver.sleep(3000);
        await driver.findElement(By.xpath('//*[@id="view"]/div/header/div[2]/p')).click();
        await driver.findElement(By.name('email')).sendKeys('origi@gmail.com');
        await driver.findElement(By.name('password')).sendKeys('123123');
        await driver.findElement(By.xpath('//*[@id="login-submit"]/input')).click();
        await driver.sleep(2000)
        let CompanyName = await driver.wait(until.elementLocated(By.xpath('//*[@id="view"]/div/div[1]/div/div[2]/h2'))).getText();
        assert.equal(CompanyName, 'גבעת האקליפטוס')
        
    });



    it('create a building',  async () => {
        
        
        
        await driver.sleep(3000);
        await driver.findElement(By.xpath('//*[@id="view"]/div/div[2]/div/div[1]/div[4]/div[1]/div/p')).click();
        await driver.findElement(By.xpath('//*[@id="view"]/div/div[2]/div/div[1]/div[4]/div[1]/ul/li[3]/p')).click();
        await driver.sleep(3000);
        await driver.findElement(By.id('city')).sendKeys('חולון')
        await driver.findElement(By.id('street')).sendKeys('ההסתדרות')
        await driver.findElement(By.id('number')).sendKeys(Math.floor(Math.random() * 1000));
        NumApp = await driver.findElement(By.id('numberAppartments'))
        await NumApp.clear();
        await NumApp.sendKeys('5');
        Numapp2 = await driver.findElement(By.id('numberAppartmentsConfirm'))
        await Numapp2.clear();
        await Numapp2.sendKeys('5')
        await driver.sleep(3000);
        await driver.wait(until.elementLocated(By.xpath('//*[@id="view"]/div/div[3]/div/div[4]/span/div/form/div[8]/div/button')),3000).click();
        await driver.sleep(3000);
        const btnfrd = await driver.wait(until.elementLocated(By.xpath('//*[@id="view"]/div/div[3]/div/div[5]/span/div[2]/div/form/div/div[2]/center/button')),3000);
        await btnfrd.click();
        await driver.sleep(3000);
        await driver.findElement(By.id('amount')).sendKeys('100');
        await driver.findElement(By.xpath('//*[@id="view"]/div/div[3]/div/div[6]/span/ul/ul/form/div[3]/div/div/div[1]/div/img')).click();
        await driver.sleep(3000)
        //await elem[1].click();
        await driver.findElement(By.xpath('//*[@id="view"]/div/div[3]/div/div[6]/span/ul/ul/form/div[3]/div/div/div[1]/div/ul/li[1]')).click();
        await driver.findElement(By.xpath('//*[@id="view"]/div/div[3]/div/div[6]/span/ul/ul/form/div[3]/div/div/div[2]/div/img')).click();
        await driver.sleep(3000)
        let YearSelect = await driver.wait(until.elementLocated(By.xpath('//*[@id="view"]/div/div[3]/div/div[6]/span/ul/ul/form/div[3]/div/div/div[2]/div/ul/li[2]/span')),3000);
        await driver.sleep(3000)
        await YearSelect.click();
        await driver.sleep(3000)
        const btn = await driver.findElement(By.css('#view > div > div.contentWrapper > div > div:nth-child(6) > span > ul > ul > form > div:nth-child(4) > div.grid-col-2 > center > button'));
        await btn.click();
        await driver.sleep(3000)
        SuccessfulAdd = await driver.wait(until.elementLocated(By.xpath('//*[@id="done"]/center/h2')),3000).getText();
        assert.equal('בניין חדש נוסף בהצלחה!' , SuccessfulAdd)
        driver.sleep(3000)
        const MoveToMP = await driver.wait(until.elementLocated(By.xpath('//*[@id="done"]/center/input')),3000);
        await MoveToMP.click();
        
        
    });

    it('add tenant', async() => {

        // in histadrut 730 only!!!!

        const Name = 'גל האוטומטי'
        const Phone = '0524455586' 
        const Email = 'qa@oxs.co.il';
        driver.sleep(5000);
        //await driver.wait(until.elementLocated(By.xpath('//*[@id="view"]/div/div[2]/div/div[1]/div[2]/img')),3000).click();
        //await driver.wait(until.elementLocated(By.id('61e6c0a6939a73251c84d83f')),3000).click();
        await driver.wait(until.elementLocated(By.xpath('//*[@id="view"]/div/div[3]/div/div/div/div[4]/div/div/tbody/tr[1]/td[2]/div')),3000).click();
        await driver.sleep(3000);
        btnCrtTnt = await driver.wait(until.elementLocated(By.xpath('//*[@id="toolBarFilesIcon"]')),3000);
        await btnCrtTnt.click();
        await driver.wait(until.elementLocated(By.xpath('//*[@id="toptoolbar"]/div[3]/div[1]/div/div/div[1]/p')),3000).click();
        await driver.sleep(3000)
        await driver.wait(until.elementLocated(By.xpath('//*[@id="modalDescription"]/div/div/div[1]/div[2]/input')),3000).sendKeys(Name);
        await driver.findElement(By.xpath('//*[@id="modalDescription"]/div/div/div[3]/div[2]/input')).sendKeys(Phone);
        await driver.findElement(By.xpath('//*[@id="modalDescription"]/div/div/div[5]/div[2]/div/div/input')).sendKeys(Email);
        
        AddTntbtn = await driver.wait(until.elementLocated(By.id('addTenant')),2000);
        AddTntbtn.click();
        successAddTnt = await driver.wait(until.elementLocated(By.xpath('//*[@id="modalDescription"]/div/div[2]/span/span'))).getText();
        assert.equal('דייר נוסף בהצלחה', successAddTnt);
        await driver.sleep(3000);
        await driver.wait(until.elementLocated(By.xpath('//*[@id="modalDescription"]/div/div[2]/div/div')),3000).click();
        await driver.sleep(3000);
        await driver.navigate().back();


    });


    it('Create bank account', async () => {
        
        await driver.wait(until.elementLocated(By.xpath('//*[@id="view"]/div/div[2]/div/div[1]/div[4]/div[2]/div/p')),3000).click();
        await driver.wait(until.elementLocated(By.xpath('//*[@id="view"]/div/div[2]/div/div[1]/div[4]/div[2]/ul/li[5]/p/span')),3000).click();
        await driver.wait(until.elementLocated(By.xpath('//*[@id="view"]/div/div[3]/div/div/div[4]/div[2]/div[1]/div[2]/div/img')),3000).click();
        await driver.wait(until.elementLocated(By.xpath('//*[@id="view"]/div/div[3]/div/div/div[4]/div[2]/div[1]/div[2]/div/ul/li[1]')),3000).click();
        await driver.wait(until.elementLocated(By.xpath('//*[@id="view"]/div/div[3]/div/div/div[4]/div[2]/div[2]/div[2]/input')),3000).sendKeys('123');
        await driver.wait(until.elementLocated(By.xpath('//*[@id="view"]/div/div[3]/div/div/div[4]/div[2]/div[3]/div[2]/input')),3000).sendKeys('12345');
        await driver.wait(until.elementLocated(By.xpath('//*[@id="view"]/div/div[3]/div/div/div[4]/div[2]/div[4]/div[2]/input')),3000).sendKeys('John');
        await driver.wait(until.elementLocated(By.xpath('//*[@id="view"]/div/div[3]/div/div/div[4]/div[2]/div[5]/div[2]/input')),3000).sendKeys('000000000');
        const UploadFile = await driver.findElement(By.xpath('//*[@id="view"]/div/div[3]/div/div/div[4]/div[2]/div[7]/div[2]/img'));
        //not Working!!!!!!!!;
        await UploadFile.sendKeys('"C:\\Users\\Gal\\Desktop\\Oxs_Testing\\QA_VPC\\1.pdf"');
        await driver.wait(until.elementLocated(By.xpath('//*[@id="view"]/div/div[3]/div/div/div[4]/div[2]/div[8]/div[2]/img')),3000).sendKeys('./1.pdf');
        await driver.wait(until.elementLocated(By.xpath('//*[@id="view"]/div/div[3]/div/div/div[4]/div[2]/div[10]/div[2]/input')),3000).click();
    });


describe('CC tests', () => {
        //*****only on stg env that have cardcom testing route********


    it('Pay a regular payment for one month', async () => {
        //*********only in histadrut 369********
        await driver.get('https://stg.oxs.co.il');
        await driver.sleep(3000);
        await driver.findElement(By.xpath('//*[@id="view"]/div/header/div[2]/p')).click();
        await driver.findElement(By.name('email')).sendKeys('origi@gmail.com');
        await driver.findElement(By.name('password')).sendKeys('123123');
        await driver.findElement(By.xpath('//*[@id="login-submit"]/input')).click();
        await driver.sleep(2000) 
        //start test
        let name =  await driver.wait(until.elementLocated(By.xpath('//*[@id="view"]/div/div[3]/div/div/div/div[4]/div/div/tbody/tr[1]/td[2]/div')),3000);
        console.log('this is the name' +name);
        await name.click();

        await driver.wait(until.elementLocated(By.xpath('//*[@id="yearlyPaymentsRow"]/tbody/tr/td[1]/div/span/div')),3000).click();
        await driver.wait(until.elementLocated(By.xpath('//*[@id="paymentTypesRow"]/tbody/tr/td[1]/div')),3000).click();
        await driver.wait(until.elementLocated(By.xpath('//*[@id="paymentTypesRow"]/div/button')),3000).click();
        await driver.wait(until.elementLocated(By.xpath('//*[@id="modalDescription"]/span/div/span/div[2]/div[2]/div[2]/label/div[1]/div')),3000).click();
        await driver.wait(until.elementLocated(By.xpath('//*[@id="modalDescription"]/center/div/button')),3000).click();
        await driver.wait(until.elementLocated(By.xpath('//*[@id="modalDescription"]/center/div/button')),3000).click();


    });
});

});
