import React, { Fragment, useState, useEffect }from 'react'
import { connect } from 'react-redux'
import { Grid, Container, Box, FormControl, FormGroup, Modal, Input, InputLabel, Button, Checkbox, Select, MenuItem } from '@material-ui/core';

import Elements from '../components/Elements'
import ElementsData from './ElementsData'
import {optionsArray} from './optionsArray'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import CopyToClip from './CopyToClip'
import {elementCopy} from './CopyToClip'


const ConverterPage = (e) => {
    var [name, setName] = useState("")
    var [selectedElement, setSelectedElement] = useState(optionsArray[0].v)
    const [confirmed, setConfirmed] = useState(false)
    const [selected, setSelected] = useState(false)
    // const [type, setType] = useState('')
    // const [value, setValue] = useState('')
    const [copied, setCopied] = useState(false)

    const handleChange = (e) => {
        e.preventDefault();
        setSelectedElement(e.target.value)
        setSelected(true)
        console.log('🚀 ~ file: ConverterPage.js ~ line 21 ~ onSubmit', "HANDLE CHANGE", e.target.value)
        // Select.value = "p"
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setConfirmed(true)
        const wordSplit = selectedElement.split(" ")
        const [startTag, endTag] =  wordSplit
        const newElement = [`${startTag} ${name} ${endTag}`]
        
        elementCopy(newElement)
        console.log('🚀 ~ file: ConverterPage.js ~ line 32 ~ onSubmit', "newElement", newElement)
        // console.log('🚀 ~ file: ConverterPage.js ~ line 27 ~ onSubmit', "HANDLE SUBMIT")
    }

    return (
        <Fragment> 
        <Container maxWidth="sm">
            <h1>COVERTER PAGE</h1>
        <div>
            {/* <FormControl>
                <InputLabel id="demo-simple-select-label">
                Element-Type</InputLabel>
            </FormControl> */}

            <FormControl >
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={optionsArray[0].v}
                    value={selectedElement}
                    onChange={handleChange}
                    >
                    {console.log("selectedElement", selectedElement)}
                        { optionsArray ?
                            optionsArray.map(option => <MenuItem value={option.v} key={option.k}>
                                {option.k}
                            </MenuItem>)
                            : "null"            }
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel></InputLabel>
                <Input onChange={e => setName(e.target.value)}></Input>
            </FormControl>
{console.log(name)}
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
        {/* <Elements/> */}
        <CopyToClip newElement={handleSubmit.newElement ? handleSubmit.newElement : null }/>
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
// export default connect(null,elementCopy)(ConverterPage)