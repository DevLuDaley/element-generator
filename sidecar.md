
# create folder and cd into it
    mkdir element-generator && cd element-generator

    npm init -y

    git init

    use github desktop app to commit files push to remote/github.com

    npm i react react-dom

# Install Babel
    npm i -D @babel/preset-react @babel/preset-env @babel/core babel-loader @babel/plugin-proposal-class-properties


# create .babelrc File

Here we tell babel to use @babel/preset-env target the last few versions of browsers and support for them. This will ensure that when the browser is updated it will stop transpiling of the old browser version and will transpile for the new one.
modules: false means hey babel! don’t do anything with the modules let webpack handle it.
We also tell webpack to use @babel/preset-react for React and @babel/plugin-proposal-class-properties to transform static class properties



```json

{
  "presets": [
 [ "@babel/preset-env", {
   "modules": false,
   "targets": {
  "browsers": [
    "last 2 Chrome versions",
    "last 2 Firefox versions",
    "last 2 Safari versions",
    "last 2 iOS versions",
    "last 1 Android version",
    "last 1 ChromeAndroid version",
    "ie 11"
  ]
   }
 } ],
 "@babel/preset-react"
  ],
  "plugins": [ "@babel/plugin-proposal-class-properties" ]
}

```


```js

npm i -D webpack webpack-cli webpack-dev-server html-webpack-plugin path

```


# create project folders and files
    mkdir src public
    touch src/index.js src/App.js public/index.html public/App.css

Here html-webpack-plugin will use your custom index.html that will be rendered by webpack-dev-server
Please note that if you don’t pass any param in new HTMLWebpackPlugin() , then thehtml-webpack-plugin plugin will generate an HTML5 file for you that includes all your webpack bundles in the body using script tags.
Also add the style loader, css loader and file-loader for styles and images. As webpack understands javascript so we need to convert the styles and images in javascript using these loaders


# install style loader
    npm install style-loader css-loader file-loader


# update app.js
```js
// app.js

import React, { Fragment, Component } from 'react'
import './App.css'
const App = () => {
    return (
    <Fragment className="App">
    <h1> Hello, World!</h1>
    </Fragment>  );
}
export default App;
```

# update App.css

```css
/* app.css */
.App {
    margin: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    color: #222222;
}
```
# update Index.js

```js
//  Index.js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'));
```




```json
// package.json >> copy below --replacing current scripts object
"scripts": {
    "start:dev": "webpack serve --mode development --open",
    "start": "webpack serve --mode development --open index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },


    "build": "npx webpack --mode development",
    "start": "webpack serve --mode development --open index.js",
  ```