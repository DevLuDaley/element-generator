import React, { Fragment, useState, useEffect }from 'react'
import Elements from '../components/Elements'
import ElementsData from './ElementsData'
import elementsArray from './ElementsData'
import {CopyToClipboard} from 'react-copy-to-clipboard';
// import Button from '@material-ui/core/Button';
// import Box from '@material-ui/core/Box';
// import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
// import { Input } from '@material-ui/core/';
// import { Checkbox } from '@material-ui/core/';
import { Grid, Container, Box, FormControl, FormGroup, Modal, Input, InputLabel, Button, Checkbox, Select, MenuItem } from '@material-ui/core';
// import  from '@material-ui/core/InputLabel';


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
    const [type, setType] = useState('')
    const [value, setValue] = useState('')
    const [copied, setCopied] = useState(false)
    // const [options, setOptions] = useState(elementsArray)
    // const [] = setState([])

    // console.log(elementsArray)
    const handleSubmit = (e) => {
        e.preventDefault();
        setConfirmed(true)
        console.log('🚀 ~ file: ConverterPage.js ~ line 8 ~ onSubmit', "CLICKED")
    }
    return (
        <Fragment> 
        <Container maxWidth="sm">
            <h1>COVERTER PAGE</h1>
            {/* <Box component="span" m={1} color="text.primary"> */}
            {/* <Box color="text.primary" clone></Box> */}
        <div>


 <FormControl >
        <InputLabel id="demo-simple-select-label">Element-Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        //   value={1}
          onChange={handleSubmit}
        >
    {/* { elementsArray ? 
        <p> WORDS </p>
        : "null"
    } */}
            

          <MenuItem >Ten</MenuItem>
          {/* <MenuItem value={10}>Ten</MenuItem> */}
          {/* <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>


            <FormGroup id='convert-to-element-form' onSubmit={handleSubmit}>



                {/* <Checkbox type="text" name="pTag"
                // onClick={e => setName(e.target.value)}
                onClick={e => console.log(e.target)}

                /> */}

              <InputLabel> Enter text to be converted </InputLabel> 
                <Input type="text" placeholder='enter text...' value={name} name="name" onChange={e => setName(e.target.value)}/>
                
                <Button onClick={handleSubmit} type="submit" variant="raised" color="primary">
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
        <ElementsData/>
        <CopyToClip/>
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