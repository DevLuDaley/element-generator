import React, { Fragment, Component, useState, useEffect }from 'react'
import Elements from './Elements'
import ElementsData from './ElementsData'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Button from '@material-ui/core/Button';


    class CopyToClip extends Component {
        constructor(props) {
            super(props);
            this.state = {
                name: "",
                confirmed:false,
                value:'',
                copied: false
              }
        }
        handleSubmit = (e) => {
        e.preventDefault();
        // setConfirmed(true)
        // console.log('🚀 ~ file: ConverterPage.js ~ line 8 ~ onSubmit', name)
    }

    elementCopy = (newElement) => {
      this.setState(this.props.value = newElement)
      console.log('WORD', newElement)
      console.log('PROPS', props)
    }
        render() { 
          console.log("COPY newElement", this.props.newElement);
            return(
    // const [] = setState([])
    <Fragment>
    <h1>COPY TO CLIP</h1>
            <div>
        <input value={ confirmed == true ? "yes" : "no"}
          onChange={({target: {value}}) => this.setState({value, copied: false})} />
 
        <CopyToClipboard text={this.state.value}
          onCopy={() => this.setState({copied: true})}>
          <span>Copy to clipboard with span</span>
        </CopyToClipboard>
 
        <CopyToClipboard text={this.state.value}
          onCopy={() => this.setState({copied: true})}>
          <Button variant="contained" color="primary">Copy to clipboard with button</Button>
        </CopyToClipboard>
 
        {this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
            </div>
        </Fragment> 
        

        )
    }
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
export default CopyToClip
