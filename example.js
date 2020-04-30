const puppeteer = require('puppeteer');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let config = {
    launchOptions: {
       headless:false
     }
}

const homepage = {
     search: 'input[type="text"]'
 }
       

puppeteer.launch(config.launchOptions).then(async browser => {
  const page = await browser.newPage();
  var xhttp = new XMLHttpRequest(page);
  await page.goto('https://Google.com');
  await page.type(homepage.search, "look");

  xhttp.onreadystatechange = function() {
     	
	if(this.readyState == 4 && this.status == 200)
	 {   
           var req= xhttp.responseText;
           console.log(req);
	 }
                                      }

  await page.screenshot({path: 'example.png'})
 });

 
 


