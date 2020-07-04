# App page
https://arkadash.github.io/human-beta/

# David Workeneh Design
### Figma
https://www.figma.com/file/Lc5Gdb9v9TMUBDFyj9mgtI/Untitled?node-id=66%3A1030

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
<br/><br/>


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

## Animation
In order to change the wizard transition animation - 
Choose from [Animate.css](https://animate.style/)
- Copy the animation class (hover the name and click on "Copy class name to clipboard")
- In the Project - go to `Wizard/index.js`
- Replace the second word in `ANIMATE` constant with your choice
so `const ANIMATE = 'animate__animated animate__zoomInDown';` 
will become `const ANIMATE = 'animate__animated animate__MyNewAnimation';`