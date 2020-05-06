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
       
	   values: '//div/ul[class="erkvQe"]/li'
 }

       
puppeteer.launch(config.launchOptions).then(async browser => {
  const page = await browser.newPage();
  await page.goto('https://Google.com');
  await page.type(homepage.search, "hello");
  await page.type(homepage.search, "world");
   await page.waitFor(100);

  let promise = new promise((resolve,reject) => 
  {
  var list= [];
   list=page.$(dropdown.values);
  console.log(list);
  }).catch( () => {  
    console.log("No suggestions");
	});

 await page.setRequestInterception(true);
 page.on('request', request => {

   console.log(request.resourceType());
   console.log(request.url());
   
});

                                      

  await page.screenshot({path: 'example.png'})
 });

 
 


