import React, { Fragment, useState, useEffect }from 'react'
import Elements from '../components/Elements'
import ElementsData from './ElementsData'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core/';
import FormControl from '@material-ui/core/FormControl';


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
        console.log('🚀 ~ file: ConverterPage.js ~ line 8 ~ onSubmit', "CLICKED")
    }
    return (
        <Fragment> 
        <Container>
            <h1>COVERTER PAGE</h1>
            <Box component="span" m={1} color="text.primary">
            {/* <Box color="text.primary" clone></Box> */}
        <div>
              <FormControl id='new-recipe-form' onSubmit={handleSubmit}>
                <label> Enter text to be converted </label> 
                    <TextField type="text" placeholder='enter text...' value={name} name="name" onChange={e => setName(e.target.value)}/>
                    <Button type="submit" variant="contained" color="primary">
                        Convert to Tag
                    </Button>
              </FormControl>

                        <Button variant="contained" color="primary" onClick={(e) => {console.log("value of e.target => ", e.target)}}
                            type="copy">Copy Text to clipboard
                        </Button>
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
        {/* </Box> */}
        <Elements/>
        <ElementsData/>
        <CopyToClip/>
        </Box>
        </Container>
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