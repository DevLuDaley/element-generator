import React, {Fragment, useState} from 'react'
import {optionsArray} from './optionsArray'
// &lt;
// &gt; 
const ElementData = () => {

// const wordSplit = elementsArray[1].split(" ")
const wordSplit = optionsArray //.split(" ")
// const [startTag, endTag] =  wordSplit
// console.log("wordSplit", wordSplit)
// console.log("wordSplit[0]", wordSplit[0]["div"])
return (
    <Fragment>
    <h1>ELEMENTS DATA</h1>
    {optionsArray ? optionsArray.map(op => <p>
    {op.key} => {op.value}
    </p>
    ): null}
        {/* {elementsArray[1]} */}
        {/* {wordSplit[0]} text that needs to be divd
        {" " + wordSplit[1]} */}
        {/* {wordSplit} */}
        {/* {startTag + " "}
        things
        {" " + endTag} */}
    </Fragment>  );
}
export default ElementData;