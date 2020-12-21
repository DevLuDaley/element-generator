import React, { Fragment, useState, useEffect }from 'react'
// import PropTypes from 'prop-types'
// import {setState} from re
// var [name, setName] = useState()
// useEffect(() => {
        //         setState(props.meals);
        //     }, [props.meals]);
        
        
        
    const ConverterPage = () => {
    var [name, setName] = useState("")
    // const [] = setState([])
    return (
        <div>
              <form id='new-recipe-form' onSubmit={console.log('🚀 ~ file: ConverterPage.js ~ line 8 ~ onSubmit', "SUBMITTED")}>
                <label> Enter text to be converted </label> 
                    <input type="text" placeholder='enter text...' value={name} name="name" onChange={e => setName(e.target.value)}/>
                        <button type="submit">Convert to Tag</button>
                           </form>
        </div>
    )
}

export default ConverterPage