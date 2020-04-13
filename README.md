## React Tutotrial by Tina 

Project Preview URL: https://freeburma.github.io/react-by-tania

Project Completed Date: 13-April-2020 12:33pm
#### Tutorial Ref: https://www.taniarascia.com/getting-started-with-react/

Source Code: git clone https://github.com/taniarascia/react-tutorial.git

###  Deploying on git-hub pages 

Add the following at "package.json" >> 
"homepage": "https://freeburma.github.io/react-by-tania",

"scripts": {
  // ...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}


Install dependency: 
$ npm install --save-dev gh-pages
$ npm run build
$ npm run deploy