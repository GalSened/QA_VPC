
const {Builder, By, Key, until} = require('selenium-webdriver');
var assert = require('chai').assert;
const webdriver = require('selenium-webdriver'); 
let driver = new webdriver.Builder().forBrowser('chrome').build();    


// Our test
describe('Test VPC auto',  () => {
    before(() => {
        driver.get('http://dev.oxs.co.il'); 
        driver.manage().window().maximize();  
    });

    after(() =>{
        //driver.close();
    })
    it('Testing right page',async  () => {
    // Set timeout to 10 seconds
    
        try{
        await driver.sleep(3000);
        let Title = await driver.getTitle();
        console.log(Title);
        let EnterSystem = await driver.findElement(By.xpath('//*[@id="view"]/div/header/div[2]/p')).getText();
        assert.equal(EnterSystem,'כניסה למערכת');

        
        // Find title and assert
        }   
            catch(e) {
        
                console.log("Error:", e.message)
                return false
            }
    
    });

    it('enter credentials', async () => {
        try{
        await driver.sleep(3000);
        await driver.findElement(By.xpath('//*[@id="view"]/div/header/div[2]/p')).click();
        await driver.findElement(By.name('email')).sendKeys('origi@gmail.com');
        await driver.findElement(By.name('password')).sendKeys('123123');
        await driver.findElement(By.xpath('//*[@id="login-submit"]/input')).click();
        await driver.sleep(2000)
        let CompanyName = await driver.wait(until.elementLocated(By.xpath('//*[@id="view"]/div/div[1]/div/div[2]/h2'))).getText();
        assert.equal(CompanyName, ' האקליפטוס')
        }
        catch(e) {
            //marking the test as Failed if product has not been added to the cart
            console.log("Error:", e.message)
            return false
        }    
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

        const Name = 'גל האוטומטי'
        const Phone = '0524455586' 
        const Email = 'qa@oxs.co.il';

        await driver.wait(until.elementLocated(By.xpath('//*[@id="view"]/div/div[3]/div/div/div/div[4]/div/div/tbody/tr[1]/td[2]/div')),3000).click();
        await driver.sleep(3000);
        btnCrtTnt = await driver.wait(until.elementLocated(By.xpath('//*[@id="toolBarFilesIcon"]')),3000);
        await btnCrtTnt.click();
        await driver.wait(until.elementLocated(By.xpath('//*[@id="toptoolbar"]/div[3]/div[1]/div/div/div[1]/p')),3000).click();
        await driver.sleep(3000)
        await driver.wait(until.elementLocated(By.xpath('//*[@id="modalDescription"]/div/div/div[1]/div[2]/input')),3000).sendKeys(Name);
        await driver.findElement(By.xpath('//*[@id="modalDescription"]/div/div/div[3]/div[2]/input')).sendKeys(Phone);
        await driver.findElement(By.xpath('//*[@id="modalDescription"]/div/div/div[5]/div[2]/div/div/input')).sendKeys(Email);
        driver.sleep(3000);
        AddTntbtn = await driver.findElement(By.xpath('//*[@id="61e695a097e901136cb2aac1"]/div[1]/div[2]/div[2]/footer/center/div[2]/button'));
        AddTntbtn.click();
        successAddTnt = await driver.wait(until.elementLocated(By.xpath('//*[@id="modalDescription"]/div/div[2]/span/span'))).getText();
        assert.equal('דייר נוסף בהצלחה', successAddTnt);
        driver.findElement(By.xpath('//*[@id="modalDescription"]/div/div[2]/span/span')).click();
        driver.wait(until.elementLocated(By.xpath('//*[@id="view"]/div/div[2]/div/div[1]/div[4]/div[3]/ul/li[1]/p')), 3000).click();


    });






});
