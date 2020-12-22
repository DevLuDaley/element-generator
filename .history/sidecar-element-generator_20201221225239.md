take arg of text and return wrapped element


# create src/components
     md src/components src/actions src/containers src/actions
# create files in new folders
    touch src/containers/MainContainer.js src/components/ConverterPage.js


create store
 store.config file

 create reducerContainer file
 create modelReducer file


reducers/reducer

 # create reducer container & reducer file
     md src/reducers/
     touch src/reducers/reducer.js
```js

```

 # create store 
     md src/store
     touch src/store/configureStore
```js
//  src/store/configureStore
import { applyMiddleware, compose, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import thunk from 'redux-thunk'

import monitorReducersEnhancer from '../enhancers/monitorReducer'
import loggerMiddleware from '../middleware/logger'
import rootReducer from '../reducers/reducer'

export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, thunkMiddleware]
//   const middlewares = [loggerMiddleware, thunk]

  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]

  const composedEnhancers = composeWithDevTools(...enhancers)
//   const composedEnhancers = compose(...enhancers)

  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('../reducers/reducer', () => store.replaceReducer(rootReducer))
  }

  return store
}
```

     
 # create middleware 
     md src/middleware
     touch src/middleware/logger
```js
const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  
  let result = next(action)
  
  console.log('next state', store.getState())
  console.groupEnd()

  return result
}

export default logger
```

 # create enhancers 
     md src/enhancers 
     touch src/enhancers/monitorReducerEnhancer
```js
// src/enhancers/monitorReducerEnhancer.js
const round = number => Math.round(number * 100) / 100

const monitorReducerEnhancer = createStore => (
  reducer,
  initialState,
  enhancer
) => {
  const monitoredReducer = (state, action) => {
    const start = performance.now()
    const newState = reducer(state, action)
    const end = performance.now()
    const diff = round(end - start)

    console.log('reducer process time:', diff)

    return newState
  }

  return createStore(monitoredReducer, initialState, enhancer)
}

export default monitorReducerEnhancer

```


```js

import React from 'react';
import { render } from 'react-dom'
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';

import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const store = configureStore()
// const store = createStore(combineReducers({mealsReducer, recipesReducer}), {},(applyMiddleware(thunk)))

// store.subscribe(() => console.log("store updated", store.getState()))

// const store = createStore(
//     rootReducer,
//     compose(
//         applyMiddleware(thunk),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//     )
// );



// initialRootState = {meals:[], recipes:[]};
// const store = createStore(rootReducer, initialRootState, composeEnhancer(applyMiddleware(thunk)))
// const store = createStore(allReducers, composeEnhancer(applyMiddleware(thunk)))
// let store = createStore(mealsReducer, composeEnhancer(applyMiddleware(thunk)))
// const store = createStore(recipesReducer, composeEnhancer(applyMiddleware(thunk)))
// let store2 = createStore([mealsReducer, recipesReducer], composeEnhancers(applyMiddleware(thunk)))
// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

// console.log('🚀 ~ file: index.js ~ line 56 ~ store.getState()', store.getState());



// ReactDOM.render(
//   <Router><React.StrictMode><App /></React.StrictMode></Router>,
//   document.getElementById('root')
// );
// render(
ReactDOM.render(
  <Provider store={store}>
  <Router><React.StrictMode>
  <App/>
  </React.StrictMode></Router>,
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// store.dispatch({
//   type: 'FETCH_RECIPES',
//   text: 'Use Redux'
// })
// console.log(store.getState())

// export App = () => {
    // ONLY NOW does it make sense to try to access the store/dispatch actions
// }
// export default store;
```
npm i react-redux
npm i react-router-dom 
npm i redux
npm i redux-devtools-extension
npm i redux-thunk
 npm i reportWebVitals //non essesntial

    "react-redux": "^7.2.2",
    "react-router-dom": "^5.2.0",
    "redux": "^4.0.5",
    "redux-devtools-extension": "^2.13.8",
    "redux-thunk": "^2.3.0",



    npm install --save react react-copy-to-clipboard
    npm install @material-ui/core