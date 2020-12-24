import React, { Fragment, useState, useEffect }from 'react'
import { Grid, Container, Box, FormControl, FormGroup, Modal, Input, InputLabel, Button, Checkbox, Select, MenuItem } from '@material-ui/core';

import Elements from '../components/Elements'
import ElementsData from './ElementsData'
import {optionsArray} from './optionsArray'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import CopyToClip from './CopyToClip'


const ConverterPage = () => {
    var [name, setName] = useState("")
    var [confirmed, setConfirmed] = useState(false)
    const [type, setType] = useState('')
    const [value, setValue] = useState('')
    const [copied, setCopied] = useState(false)

    const handleChange = (e) => {
        e.preventDefault();
        setConfirmed(true)
        console.log('🚀 ~ file: ConverterPage.js ~ line 21 ~ onSubmit', "HANDLE CHANGE")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setConfirmed(true)
        console.log('🚀 ~ file: ConverterPage.js ~ line 27 ~ onSubmit', "HANDLE SUBMIT")
    }

    return (
        <Fragment> 
        <Container maxWidth="sm">
            <h1>COVERTER PAGE</h1>
        <div>
            <FormControl >
        <InputLabel id="demo-simple-select-label">Element-Type</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={optionsArray[0].value}
                onChange={handleChange}
                >
                    { optionsArray ?
                        optionsArray.map(option => <MenuItem value={option.v} key={Math.floor(Math.random() * 10) +500}>
                            {option.k}
                        </MenuItem>)
                        : "null"
                    }
                </Select>
            </FormControl>

            <FormGroup id='convert-to-element-form' onSubmit={handleSubmit}>



                {/* <Checkbox type="text" name="pTag"
                // onClick={e => setName(e.target.value)}
                onClick={e => console.log(e.target)}

                /> */}

              {/* <InputLabel> Enter text to be converted </InputLabel> 
                <Input type="text" placeholder='enter text...' value={name} name="name" onChange={e => setName(e.target.value)}/> */}
                
                <Button onClick={handleSubmit} type="submit" variant="contained" color="primary">
                        Convert to Tag
                </Button>
              </FormGroup>

              {/* <Button variant="contained" 
              color="primary" 
              onClick={(e) => {console.log("value of e.target => ", e.target)}}
                            type="copy"> Copy Text to clipboard
              </Button> */}
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
                    <Box color="primary">
                    when ready, your results will appear here
                    </Box>
                           }
        </div>
        {/* </Box> */}
        <Elements/>
        <CopyToClip/>
        {/* <ElementsData/> */}
        {/* </Box> */}
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