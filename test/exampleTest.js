  const puppeteer = require('puppeteer');
  const assert = require("Chai").assert;

  let config = {
    launchOptions: {
       headless:false
     }
  }

  const homepage = {
     search: 'input[type="text"]'
  }
 
  const  dropdown = {
       
	   values: 'li[class="sbct"]'
  }
  
       
  puppeteer.launch(config.launchOptions).then(async browser => {
  const page = await browser.newPage();
  await page.goto('https://Google.com');
  await page.type(homepage.search, " Hello");
  await page.type(homepage.search, " world");
  await page.type(homepage.search, " program");
 

  await page.setRequestInterception(true);
  page.on('request', request => {
  
  console.log(request.resourceType());
  var xhr= request.url()
  console.log(xhr);
  if(xhr.indexOf('+Hello+world')> -1)
  {
  	  console.log("Search text present in xhr request");
  }

  //assert.include(xhr,"helloworld"); 
  }); 
  
     
   const text = await page.evaluate(()=> Array.from(document.querySelectorAll('li[class="sbct"]'), element => element.textContent));
  console.log(text[0]);
  console.log(text[1]);
  console.log(text[2]);
  console.log(text[3]);

                             

  await page.screenshot({path: 'example.png'})

  });