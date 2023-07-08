const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    const page2 = await browser.newPage();
    const page3 = await browser.newPage();
    const page4 = await browser.newPage();
    const page5 = await browser.newPage();

    const phoneNumbers = ['081221871961'];

    await page.goto('https://eci.id/register');
    await page.setViewport({ width: 1080, height: 1024 });
    await page.waitForSelector('#phoneOrEmail');
    await page.type('#phoneOrEmail', phoneNumbers);
    const buttonSelector = '#__layout > div > div.transitions-500 > div > div > div > div:nth-child(3) > div > form > div.row.px-5.mt-4 > div > button > span';
    const ButtonWhatsapp = '#__layout > div > div.transitions-500 > div > div > div > div.col-12.col-lg-6.d-flex.align-items-center > div > div > div:nth-child(2) > div:nth-child(2) > div > div > div';
    await page.waitForSelector(buttonSelector);
    await page.click(buttonSelector);
    console.log(`memilih whatsapp`);
    await page.waitForSelector(ButtonWhatsapp);
    await page.click(ButtonWhatsapp);
    console.log('sukses mengirim sms eci');
    
    
    await page2.goto('https://eci.id/register');
    await page2.setViewport({ width: 1080, height: 1024 });
    await page2.waitForSelector('#phoneOrEmail');
    await page2.type('#phoneOrEmail', phoneNumbers);
    const buttonSelector2 = '#__layout > div > div.transitions-500 > div > div > div > div:nth-child(3) > div > form > div.row.px-5.mt-4 > div > button > span';
    const ButtonWhatsapp2 = '#__layout > div > div.transitions-500 > div > div > div > div.col-12.col-lg-6.d-flex.align-items-center > div > div > div:nth-child(2) > div:nth-child(2) > div > div > div';
    await page2.waitForSelector(buttonSelector2);
    await page2.click(buttonSelector2);
    console.log(`memilih whatsapp`);
    await page2.waitForSelector(ButtonWhatsapp);
    await page2.click(ButtonWhatsapp);
    console.log('sukses mengirim sms eci');

    
    await page3.goto('https://eci.id/register');
    await page3.setViewport({ width: 1080, height: 1024 });
    await page3.waitForSelector('#phoneOrEmail');
    await page3.type('#phoneOrEmail', phoneNumbers);
    await page3.waitForSelector(`#__layout > div > div.transitions-500 > div > div > div > div:nth-child(3) > div > form > div.row.px-5.mt-4 > div > button > span`);
    await page3.click(`#__layout > div > div.transitions-500 > div > div > div > div:nth-child(3) > div > form > div.row.px-5.mt-4 > div > button > span`);
    console.log(`memilih whatsapp`);
    await page3.waitForSelector(`#__layout > div > div.transitions-500 > div > div > div > div.col-12.col-lg-6.d-flex.align-items-center > div > div > div:nth-child(2) > div:nth-child(2) > div > div > div`);
    await page3.click(`#__layout > div > div.transitions-500 > div > div > div > div.col-12.col-lg-6.d-flex.align-items-center > div > div > div:nth-child(2) > div:nth-child(2) > div > div > div`);
    console.log('sukses mengirim sms eci');

    await page4.goto('https://eci.id/register');
    await page4.setViewport({ width: 1080, height: 1024 });
    await page4.waitForSelector('#phoneOrEmail');
    await page4.type('#phoneOrEmail', phoneNumbers);
    await page4.waitForSelector(`#__layout > div > div.transitions-500 > div > div > div > div:nth-child(3) > div > form > div.row.px-5.mt-4 > div > button > span`);
    await page4.click(`#__layout > div > div.transitions-500 > div > div > div > div:nth-child(3) > div > form > div.row.px-5.mt-4 > div > button > span`);
    console.log(`memilih whatsapp`);
    await page4.waitForSelector(`#__layout > div > div.transitions-500 > div > div > div > div.col-12.col-lg-6.d-flex.align-items-center > div > div > div:nth-child(2) > div:nth-child(2) > div > div > div`);
    await page4.click(`#__layout > div > div.transitions-500 > div > div > div > div.col-12.col-lg-6.d-flex.align-items-center > div > div > div:nth-child(2) > div:nth-child(2) > div > div > div`);
    console.log('sukses mengirim sms eci');

    await page5.goto('https://eci.id/register');
    await page5.setViewport({ width: 1080, height: 1024 });
    await page5.waitForSelector('#phoneOrEmail');
    await page5.type('#phoneOrEmail', phoneNumbers);
    await page5.waitForSelector(`#__layout > div > div.transitions-500 > div > div > div > div:nth-child(3) > div > form > div.row.px-5.mt-4 > div > button > span`);
    await page5.click(`#__layout > div > div.transitions-500 > div > div > div > div:nth-child(3) > div > form > div.row.px-5.mt-4 > div > button > span`);
    console.log(`memilih whatsapp`);
    await page5.waitForSelector(`#__layout > div > div.transitions-500 > div > div > div > div.col-12.col-lg-6.d-flex.align-items-center > div > div > div:nth-child(2) > div:nth-child(2) > div > div > div`);
    await page5.click(`#__layout > div > div.transitions-500 > div > div > div > div.col-12.col-lg-6.d-flex.align-items-center > div > div > div:nth-child(2) > div:nth-child(2) > div > div > div`);
    console.log('sukses mengirim sms eci');
    // await browser.close();

})();
