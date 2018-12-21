const puppeteer = require('puppeteer');

(async () => {

  /////////////////// config ////////////////////////
  // the task id you want to create
  const taskID = 31;

  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.setViewport({height: 800, width: 1200});
  await page.goto('localhost:8081/sign-in');
  
  ///////////////// Sign in ///////////////////////
  await page.click('div > .login_page__block > .m-t > .form-group:nth-child(1) > .form-control');
  await page.keyboard.type('john_smith');
  await page.click('div > .login_page__block > .m-t > .form-group:nth-child(2) > .form-control');
  await page.keyboard.type('123456');
  await page.click('.middle-box > div > .login_page__block > .m-t > .btn');

  await page.waitForNavigation();

  // changing the language
  await page.click('.navbar > .nav > li > .language-dropdown > .form-control');
  await page.select('.navbar > .nav > li > .language-dropdown > .form-control', 'sa');


  // shoud start from 1 and end with 93
  for (let i = 1; i<=92; i++) {
    if (i==7) {
      continue;
    }
    // تدقيق
    await page.goto(`http://localhost:8081/tasks/1/edit/${i}`);
    await page.waitFor(1000);

    await page.click('#page-wrapper > div.overflow-container > form > div > div.formButtons__cont > div > div:nth-child(2) > div.task-form__action__selectbox > div > div');
    await page.keyboard.type('تدقيق');
    await page.keyboard.press(String.fromCharCode(13));

    await page.waitFor(2000);

    await page.waitForSelector('#page-wrapper > div.overflow-container > form > div > div.formButtons__cont > div > div:nth-child(2) > span > button') 
    await page.click('#page-wrapper > div.overflow-container > form > div > div.formButtons__cont > div > div:nth-child(2) > span > button') 
    await page.keyboard.press(String.fromCharCode(13));

    // await page.waitForSelector('#body > div.swal2-container.swal2-center.swal2-fade.swal2-shown > div > div.swal2-actions > button.swal2-confirm.swal2-styled') 
    // await page.click('#body > div.swal2-container.swal2-center.swal2-fade.swal2-shown > div > div.swal2-actions > button.swal2-confirm.swal2-styled') 
    // await page.waitForSelector('#body > div.swal2-container.swal2-center.swal2-fade.swal2-shown > div > div.swal2-actions > button.swal2-cancel.swal2-styled') 
    // await page.click('#body > div.swal2-container.swal2-center.swal2-fade.swal2-shown > div > div.swal2-actions > button.swal2-cancel.swal2-styled') 
    await page.waitFor(2000);

  }


  
  await browser.close();
})();
