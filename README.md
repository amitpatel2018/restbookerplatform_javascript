# restbookerplatform_javascript

This Project automates Single Room booking functionality using WebDriverIO. 

Installation: 
Simply you can download this project and use "npm install" to install WebDriverIO and related dependencies. 

Pre-requisite: 
1. Node JS should be installed in your system. 
2. Download and install Java as some selenium commands required Java
3. Install IDE of your choice (Here I am using Visual Studio Code)

To run project: 
1. If you didn't configure conf.js in your package.json then run your project using "npx wdio run wdio.conf.js"
2. If you have configure (As I did) conf.js in your package.json then run your project using "npm run regression" where regression is just name configured in package.json

To extend page objects 
page.js is roor of all page obejcts which you can extends in your new created page object file. 
You can add common used functions in page.js so all the derieved pages can use them without writing again. 

How you can call page object functions in your tests: 
1. import required page object file in your test using "const  anyName = require('Location of your page object file');
2. anyName.functionName (or selector name) 
3. Perform desired operations like click(), setValue() etc.

what this project is not focusing on:
1. Error Handling
2. Generating Log files
3. Integrating with CI/CD tools
4. Handling Reports
5. Running project from command line
6. Screenshots for failure testcases
