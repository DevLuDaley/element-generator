import React, { Fragment} from 'react'
import '../public/App.css'
import MainContainer from './containers/MainContainer'

const App = () => {
    return (
            <Fragment>
                <section className="App">
                </section>
                <MainContainer/>
            </Fragment>  
           );
}
export default App;

if (module.hot) {
   module.hot.accept('../dist/print.js', function() {
     console.log('GREAT JOB LU!');
     printMe();
   })
 }