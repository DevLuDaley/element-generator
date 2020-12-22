import React, { Fragment, useState, useEffect }from 'react'
import Elements from '../components/Elements'
import ElementsData from './ElementsData'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Button from '@material-ui/core/Button';

import CopyToClip from './CopyToClip'
// import PropTypes from 'prop-types'
// import {setState} from re
// var [name, setName] = useState()
// useEffect(() => {
        //         setState(props.meals);
        //     }, [props.meals]);
        
        
        
    const ConverterPage = () => {
    // var [name, setName] = useState("")
    // var [confirmed, setConfirmed] = useState(false)
    // // const [] = setState([])
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log('🚀 ~ file: ConverterPage.js ~ line 8 ~ onSubmit', name)
        
var [name, setName] = useState("")
var [confirmed, setConfirmed] = useState(false)
const [value, setValue] = useState('')
const [copied, setCopied] = useState(false)
    // const [] = setState([])
    const handleSubmit = (e) => {
        e.preventDefault();
        setConfirmed(true)
        console.log('🚀 ~ file: ConverterPage.js ~ line 8 ~ onSubmit', name)
    }
    return (
        <Fragment> 
            <h1>COVERTER PAGE</h1>
        <div>
              <form id='new-recipe-form' onSubmit={handleSubmit}>
                <label> Enter text to be converted </label> 
                    <input type="text" placeholder='enter text...' value={name} name="name" onChange={e => setName(e.target.value)}/>
                        <button type="submit">Convert to Tag
                        </button>
              </form>

                        <button onClick={(e) => {console.log("value of e.target => ", e.target)}}
                            type="copy">Copy Text to clipboad
                        </button>
                            
                           <br>
                           </br>
                           { confirmed ? 
                               <section name={name}>
                               &lt;option&gt;
                               <br></br>
                                { name }
                               <br></br>
                               &lt;/option&gt;
                               </section>
                               :
                               "when ready, your results will appear here"
                           }
        </div>
        <Elements/>
        <ElementsData/>
        <CopyToClip/>
        </Fragment>
    )
}


// const mapStateToProps = state => {
//     // console.log('state.loadRecipesReducer 1', state.loadRecipesReducer);
//     // console.log('state.loadRecipesReducer.loadedRecipes 2', state.loadRecipesReducer.loadedRecipes);
//     // const loadResults = state.loadRecipesReducer.loadedRecipes

//     // loadResults.map(load => load.title)
//     return(
//         {
//             // meals: state.loadRecipesReducer.meals,
//             name: state.name
//         }
//     )
// }

export default ConverterPage