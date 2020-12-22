
import { render } from 'react-dom'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';

import configureStore from './store/configureStore';
import App from './App';

const store = configureStore()

// render(
ReactDOM.render(
  <Provider store={store}>
    <Router>
    hi
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// if (module.hot) {
//    module.hot.accept('../dist/print.js', function() {
//      console.log('GREAT JOB LU!');
//      printMe();
//    })
//  }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

