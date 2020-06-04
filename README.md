# David Workeneh Design
### Figma
https://www.figma.com/file/0J8piuTTMl9ySjOXcSqnYX/sol_e?node-id=112%3A305

## Working with Github
Open new account in **Github**

Download and install Git https://git-scm.com/

### Important Scripts
Clone the project
```
git clone git@github.com:arkadash/human-beta.git 
```

Get latests updates
```
git pull
```

## Available NPM Scripts
Download and install https://nodejs.org/en/

### Install
Install all the related depndenciesn(all the libraries and code that the project needs)
this will create a new folder named `node_modules`
don't copy ot when copying the project (it's a huge folder that can always be created by `install`)

```
npm install
```

### Run the development server
After installation, In the project directory, you can run:

``` npm start ```

This will Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### StoryBook
```
npm run storybook
```

Build and run Storybook and all the related component in order to create a playground for the components

### Create Production files
```
 npm build
```

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

