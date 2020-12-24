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
    const [newElement, setNewElement] = useState("")
    // const [type, setType] = useState('')
    // const [value, setValue] = useState('')
    const [copied, setCopied] = useState(false)

    const handleChange = (e) => {
        e.preventDefault();
        setSelectedElement(e.target.value)
        setSelected(true)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setConfirmed(true)
        const wordSplit = selectedElement.split(" ")
        const [startTag, endTag] =  wordSplit
        setNewElement(`${startTag} ${name} ${endTag}`)
    }

    const theme = {
    spacing: 8,
    }
    return (
        <Fragment> 
        
        <Container maxWidth="sm">
            <h1>HTML ELEMENT CREATOR</h1>
        <div>
            <FormGroup>
                <InputLabel id="demo-simple-select-label">
                Select Element Type</InputLabel>
            {/* </FormGroup>
            <FormGroup > */}
                <InputLabel></InputLabel>
                <Input onChange={e => setName(e.target.value)}></Input>
            </FormGroup>

            <FormGroup>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedElement}
                    onChange={handleChange}
                    >
                    {/* {console.log("selectedElement", selectedElement)} */}
                        { optionsArray ?
                            optionsArray.map(option => <MenuItem value={option.v} key={option.k}>
                                {option.k}
                            </MenuItem>)
                            : "null"            }
                </Select>
                <br></br>
                <br></br>
            </FormGroup>

            <FormGroup id='convert-to-element-form' onSubmit={handleSubmit}>

              {/* <InputLabel> Enter text to be converted </InputLabel> 
                <Input type="text" placeholder='enter text...' value={name} name="name" onChange={e => setName(e.target.value)}/> */}
                
                <Button onClick={handleSubmit} type="submit" variant="contained" color="primary">
                        Convert to Tag
                </Button>

                <br></br>
                    <CopyToClip newElement={newElement} confirmed={confirmed}/>
              </FormGroup>
              {/* <Button variant="contained" 
              color="primary" 
              onClick={(e) => {console.log("value of e.target => ", e.target)}}
                            type="copy"> Copy Text to clipboard
              </Button> */}
              <br>
              </br>
              {/* { confirmed ? 
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
                           } */}
        </div>
        </Container>
        </Fragment>
    )
}



export default ConverterPage