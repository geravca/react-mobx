# YpuTube App
## Available Scripts

**The app can be configurable from `./config/webpack.config.js`, in the `config` section:**
```react
const config = {
  buildPath: 'build', // build directory name
  sourcePath: 'src', // source files directory name
  compiledCssName: 'bundled.css', // should change in the html
  compiledJSName: 'bundled.js', // should change in the html
  serverPort: 3000 // webpack server port for development
};
```

In the project directory, you can run:

### `yarn install`
Install all dependencies before start any other command

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the folder given in `config.buildPath`.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

