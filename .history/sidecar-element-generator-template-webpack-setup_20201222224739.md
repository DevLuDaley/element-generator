
# Using Webpack, Webpack Dev Server and Babel from scratch
blogpost [https://imranhsayed.medium.com/set-up-react-app-with-webpack-webpack-dev-server-and-babel-from-scratch-df398174446d]
video [https://youtu.be/8YtdH9JT95M]



# CREATE REACT APP WITHOUT USING Boilerplate like create-react-app
What do we need?
1 - index.html
2 - support for ES6
3 - webpack
4 - Root Component
5 - react-hot-loader

# create folder and cd into it
    mkdir project-name && cd project-name

# initialize npm
    npm init -y

# create a git repository
    git init
    git add .
    git commit -m 'first commit'

# . add files && commit then create remote/github repo 
    use github desktop app to commit files push to remote/github.com

    1 - add new repository
    2 - publish repository
    
      git status

# Install react && react-dom
    npm i react react-dom

# Install Babel
    npm i -D || npm i --save-dev 
    @babel/preset-react 
    @babel/preset-env 
    @babel/core 
    babel-loader 
    @babel/cli 
    @babel/plugin-proposal-class-properties


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


# Create public && src folders + files
    mkdir src public
    touch src/index.js src/App.js public/index.html public/App.css

Here html-webpack-plugin will use your custom index.html that will be rendered by webpack-dev-server
Please note that if you don’t pass any param in new HTMLWebpackPlugin() , then thehtml-webpack-plugin plugin will generate an HTML5 file for you that includes all your webpack bundles in the body using script tags.
Also add the style loader, css loader and file-loader for styles and images. As webpack understands javascript so we need to convert the styles and images in javascript using these loaders


# install style loader
    npm install style-loader css-loader file-loader


# update Index.js

```js
//  Index.js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'));
```

# update App.js
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

# update index.html

```html
<!-- public/index.html -->
<!-- ! index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0 shrink-to-fit=no">
    <title>React Ecosystem</title>
</head>
<body>
    <div id="root"></div>
    <noscript>
        Please enable Javascript to view this site.
    </noscript>
    <script src="../dist/bundle.js"></script>
</body>
</html>
```



# update package.json file
```json
// package.json >> copy below --replacing current scripts object
// from blogpost
"scripts": {
    "start:dev": "webpack serve --mode development --open",
    "start": "webpack serve --mode development --open index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },


    "build": "npx webpack --mode development",
    "start": "webpack serve --mode development --open index.js",
  ```

# create webpack.config file from blogpost
  ```js
// webpack.config.js
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );

module.exports = {
   context: __dirname,
   entry: './src/index.js',
   module: {
      rules: [
         {
            test: /\.js$/,
            use: 'babel-loader',
         },
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
         },
         {
            test: /\.(png|j?g|svg|gif)?$/,
            use: 'file-loader'
         }
]
   },
   output: {
      path: path.resolve( __dirname, 'dist' ),
      filename: 'main.js',
      publicPath: '/',
   },
   devServer: {
      historyApiFallback: true
   },
   
   plugins: [
      new HtmlWebPackPlugin({
         template: path.resolve( __dirname, 'public/index.html' ),
         filename: 'index.html'
      })
   ]
};
  ```

# create webpack.config file from LIL react ecosystem project's sidecar
config from LIL react ecosystem project sidecar
```js
// from LIL react ecosystem project sidecar
// webpack.config.js
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: { presets: ["@babel/env"] }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: { extensions: ['*', '.js', '.jsx'] },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'public/'),
        port: 3000,
        publicPath: 'http://localhost:3000/dist/',
        hotOnly: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};

```

```js
// webpack.config
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: { presets: ["@babel/env"] }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: { extensions: ['*', '.js', '.jsx'] },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'public/'),
        port: 3005,
        publicPath: 'http://localhost:3000/dist/'
        // ,
        // hot: true,
        // hotOnly: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), 
        new HtmlWebpackPlugin({
         template: path.resolve( __dirname, 'public/index.html' ),
         filename: 'index.html'
      }), new webpack.NoEmitOnErrorsPlugin()
]
};

```