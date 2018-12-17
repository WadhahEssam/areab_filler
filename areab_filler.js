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



  for (let i = 77; i<=93; i++) {
    if (i==7) {
      continue;
    }
    await page.goto(`http://localhost:8081/tasks/${i}/create`);

    // إرسال
    await page.click('#react-select-2--value > div.Select-placeholder');
    await page.keyboard.type('إرسال');
    await page.keyboard.press(String.fromCharCode(13));

    //رقم التكليف 
    await page.click('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.formSection.property_data > div:nth-child(2) > div:nth-child(1) > div > input');
    await page.keyboard.type('32' + Math.floor(Math.random() * 999999) );


    // رمز العقار
    if (await page.$('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.formSection.property_data > div:nth-child(2) > div:nth-child(2) > div > input') !== null) {
      await page.click('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.formSection.property_data > div:nth-child(2) > div:nth-child(2) > div > input')
      await page.keyboard.type('ASDE' + Math.floor(Math.random() * 999999) );
    }
      
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

    // اسم المالك
    await page.type('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.formSection.property_data > div:nth-child(5) > div:nth-child(3) > div > input','صالح')

    // هاتف اللعميل
    await page.type('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.formSection.property_data > div:nth-child(5) > div:nth-child(4) > div > input','0556748333')

    // منطقة ( Select Control )
    await page.click('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.formSection.basic_info > div.flex > div.flex__4.flex.labelCol > div.flex__4.location.labelCol > div:nth-child(2) > div > div > div');
    await page.keyboard.type('الرياض');
    await page.keyboard.press(String.fromCharCode(13));
    await page.waitFor(200);

    // مدينة
    await page.click('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.formSection.basic_info > div.flex > div.flex__4.flex.labelCol > div.flex__4.location.labelCol > div:nth-child(3) > div:nth-child(2) > div > div > div');
    await page.keyboard.type('الرياض');
    await page.keyboard.press(String.fromCharCode(13));
    await page.waitFor(200);

    // الحي
    await page.click('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.formSection.basic_info > div.flex > div.flex__4.flex.labelCol > div.flex__4.location.labelCol > div:nth-child(4) > div:nth-child(2) > div > div > div');
    await page.keyboard.type('الازدهار');
    await page.keyboard.press(String.fromCharCode(13));

    if (await page.$('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.formSection.basic_info > div.flex > div.flex__4.flex.labelCol > div.flex__6.boundaries.labelCol > div:nth-child(2) > div:nth-child(1) > div > input') !== null) {
      // شمال
      await page.type('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.formSection.basic_info > div.flex > div.flex__4.flex.labelCol > div.flex__6.boundaries.labelCol > div:nth-child(2) > div:nth-child(1) > div > input','30487')

      // طول
      await page.type('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.formSection.basic_info > div.flex > div.flex__4.flex.labelCol > div.flex__6.boundaries.labelCol > div:nth-child(2) > div:nth-child(2) > div > input','6534')

      // جنوب
      await page.type('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.formSection.basic_info > div.flex > div.flex__4.flex.labelCol > div.flex__6.boundaries.labelCol > div:nth-child(3) > div:nth-child(1) > div > input','1456')

      // طول
      await page.type('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.formSection.basic_info > div.flex > div.flex__4.flex.labelCol > div.flex__6.boundaries.labelCol > div:nth-child(3) > div:nth-child(2) > div > input','1345')

      // شرق
      await page.type('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.formSection.basic_info > div.flex > div.flex__4.flex.labelCol > div.flex__6.boundaries.labelCol > div:nth-child(4) > div:nth-child(1) > div > input','135456')

      // طول
      await page.type('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.formSection.basic_info > div.flex > div.flex__4.flex.labelCol > div.flex__6.boundaries.labelCol > div:nth-child(4) > div:nth-child(2) > div > input','31543')

      // غرب
      await page.type('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.formSection.basic_info > div.flex > div.flex__4.flex.labelCol > div.flex__6.boundaries.labelCol > div:nth-child(5) > div:nth-child(1) > div > input','1465')

      // طول
      await page.type('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.formSection.basic_info > div.flex > div.flex__4.flex.labelCol > div.flex__6.boundaries.labelCol > div:nth-child(5) > div:nth-child(2) > div > input','6875')
    } else {
      // شمال
      await page.type('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.formSection.basic_info > div.flex > div.flex__4.flex.labelCol > div.flex__6.boundaries.labelCol > div:nth-child(6) > div:nth-child(1) > div > input','30487')

      // طول
      await page.type('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.formSection.basic_info > div.flex > div.flex__4.flex.labelCol > div.flex__6.boundaries.labelCol > div:nth-child(6) > div:nth-child(2) > div > input','6534')

      // جنوب
      await page.type('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.formSection.basic_info > div.flex > div.flex__4.flex.labelCol > div.flex__6.boundaries.labelCol > div:nth-child(7) > div:nth-child(1) > div > input','1456')

      // طول
      await page.type('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.formSection.basic_info > div.flex > div.flex__4.flex.labelCol > div.flex__6.boundaries.labelCol > div:nth-child(7) > div:nth-child(2) > div > input','1345')

      // شرق
      await page.type('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.formSection.basic_info > div.flex > div.flex__4.flex.labelCol > div.flex__6.boundaries.labelCol > div:nth-child(8) > div:nth-child(1) > div > input','135456')

      // طول
      await page.type('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.formSection.basic_info > div.flex > div.flex__4.flex.labelCol > div.flex__6.boundaries.labelCol > div:nth-child(8) > div:nth-child(2) > div > input','31543')

      // غرب
      await page.type('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.formSection.basic_info > div.flex > div.flex__4.flex.labelCol > div.flex__6.boundaries.labelCol > div:nth-child(9) > div:nth-child(1) > div > input','1465')

      // طول
      await page.type('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.formSection.basic_info > div.flex > div.flex__4.flex.labelCol > div.flex__6.boundaries.labelCol > div:nth-child(9) > div:nth-child(2) > div > input','6875')
    }

    // Ceckboxes
    await page.click('#inside_city');
    await page.click('#water');
    await page.click('#no_asphalt');

    // خط طول و عرض
    if (await page.$('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.flex.flex_cont > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div.labelRow > div:nth-child(1) > div > input') !== null) {
      await page.type('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.flex.flex_cont > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div.labelRow > div:nth-child(1) > div > input','80')
      await page.type('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.flex.flex_cont > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div.labelRow > div:nth-child(2) > div > input','120')  
    } else if (await page.$('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.flex.flex_cont > div:nth-child(1) > div:nth-child(4) > div > div.labelRow > div:nth-child(1) > div > input') !== null){
        await page.type('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.flex.flex_cont > div:nth-child(1) > div:nth-child(4) > div > div.labelRow > div:nth-child(1) > div > input','80')
        await page.type('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.flex.flex_cont > div:nth-child(1) > div:nth-child(4) > div > div.labelRow > div:nth-child(2) > div > input','120')
    } else if (await page.$('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.flex.flex_cont > div:nth-child(2) > div > div:nth-child(3) > div.labelRow > div:nth-child(1) > div > input') !== null) {
        await page.type('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.flex.flex_cont > div:nth-child(2) > div > div:nth-child(3) > div.labelRow > div:nth-child(1) > div > input','80')
        await page.type('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.flex.flex_cont > div:nth-child(2) > div > div:nth-child(3) > div.labelRow > div:nth-child(2) > div > input','120')
    }

    // اقرب شارع
    if (await page.$('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.formSection.basic_info > div.flex > div.flex__5.labelCol > div:nth-child(3) > div:nth-child(1) > div > input') !== null) {
      await page.type('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.formSection.basic_info > div.flex > div.flex__5.labelCol > div:nth-child(3) > div:nth-child(1) > div > input','شارع الملك عبدالله')
    } else {
      await page.type('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.formSection.basic_info > div.flex > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div > input','شارع الملك عبدالله')
    }
    
    // الجار
    await page.click('#react-select-10--value > div.Select-placeholder');
    await page.keyboard.type('مبني');
    await page.keyboard.press(String.fromCharCode(13));

    // المنسوب
    await page.click('#react-select-9--value > div.Select-placeholder');
    await page.keyboard.type('مرتفع');
    await page.keyboard.press(String.fromCharCode(13));

    // حفظ
    await page.waitForSelector('.client-form > .row > .formButtons__cont > span > .labelMargin') 
    await page.click('.client-form > .row > .formButtons__cont > span > .labelMargin') 
    await page.waitForSelector('#body > .swal2-container > .swal2-popup > .swal2-actions > .swal2-confirm') 
    await page.click('#body > .swal2-container > .swal2-popup > .swal2-actions > .swal2-confirm') 

    await page.waitFor(2*1000);

  }


  
  await browser.close();
})();
