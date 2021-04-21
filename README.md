# node-server

After cloning a project node_modules should be installed:

npm install
This command will install all necessary modules for this app
Correct versions of modules can be found in package.json file

In the project directory, you can run:

npm start
Runs the app in the development mode.
Open http://localhost:5000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

npm run build
Builds the app for production to the dist folder.


This project includes following npm packages:
1. express - package for creating a router
2. nodemon - package for automatically restarting a node application after any changes
3. webpack - package for generating one or more bundles
4. Babel - package for converting ES6 into compatible version of JS in current and older browsers 

Files explanation:
1. package-json - contains app arhitecture
2. package-lock.json - contains all packages that use the app with exact versions
3. nodemon.json - contains object with properties and determines what folder nodemon will be watch and what will be executed
4. .babelrc - contains babel configuration
5. router.js - application router, dispatch all incoming URL-s
6. middlewares.js - contains middleware functions. This functions are invoked in router.js
7. contoller.js - contains function for any route. This functions are invoked in router.js
8. index.js - file when is port is defined and axpress is initialized
9. main.js - output folder when build is created


