const puppeteer = require('puppeteer');

(async () => {

  /////////////////// config ////////////////////////
  // the task id you want to create
  const taskID = 1;

  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.setViewport({height: 1080, width: 1920});
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

  await page.goto(`http://localhost:8081/tasks/${taskID}/create`);

  //رقم التكليف 
  await page.click('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.formSection.property_data > div:nth-child(2) > div:nth-child(1) > div > input');
  await page.keyboard.type('123456');

  // رمز العقار
  await page.click('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.formSection.property_data > div:nth-child(2) > div:nth-child(2) > div > input')
  await page.keyboard.type('ASDE' + Math.floor(Math.random() * 999999) );
  
  // تاريخ التسليم
  await page.waitForSelector('.inputErrorCont > div > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control')
  await page.click('.inputErrorCont > div > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control')
  await page.waitForSelector('.react-datepicker > .react-datepicker__month-container > .react-datepicker__month > .react-datepicker__week:nth-child(6) > .react-datepicker__day--thu')
  await page.click('.react-datepicker > .react-datepicker__month-container > .react-datepicker__month > .react-datepicker__week:nth-child(6) > .react-datepicker__day--thu')

  // رقم الصك
  await page.type('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.formSection.property_data > div:nth-child(3) > div:nth-child(1) > div > input','12345')

  // تاريخه
  await page.type('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.formSection.property_data > div:nth-child(3) > div:nth-child(2) > div > input','2018')

  // صادر من
  await page.type('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.formSection.property_data > div:nth-child(3) > div:nth-child(3) > div > input','الرياض')

  // رقم الرخصة
  await page.type('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.formSection.property_data > div:nth-child(4) > div:nth-child(1) > div > input','201010')

  // تاريخها
  await page.type('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.formSection.property_data > div:nth-child(4) > div:nth-child(2) > div > input','2010')

  // عمر العقار
  await page.type('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.formSection.property_data > div:nth-child(4) > div:nth-child(3) > div > input','80')

  // نوع العقار
  await page.click('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.formSection.property_data > div:nth-child(4) > div.labelCol.labelCol__select > div > div');
  await page.keyboard.type('أرض');
  await page.keyboard.press(String.fromCharCode(13));
    
  // صاحب التقييم
  await page.type('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.formSection.property_data > div:nth-child(5) > div:nth-child(1) > div > input','محمد')

  // جوال صاحب التقييم
  await page.type('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.formSection.property_data > div:nth-child(5) > div:nth-child(2) > div > input','0556667474')


  
  

  await page.waitFor(2*1000);
  
  await browser.close();
})();
