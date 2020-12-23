import React, {Fragment, useState} from 'react'
// &lt;
// &gt;
const ElementData = () => {
const elementsArray = [
// "&lt;abbr>&lt;/abbr&gt;",
"<div> </div>",
<span> </span>,
<html> </html>,
<head> </head>,
<body> </body>,
<ul> </ul>,
<ol> </ol>,
<lh> </lh>,
<li> </li>,
<table> </table>,

<title> </title>,
<thead> </thead>,

<tbody> </tbody>,
<tr> </tr>,
<th> </th>,
<pre> </pre>,
<p> </p>,
<nav> </nav>,
<main> </main>,
<header> </header>,
<h1> </h1>,
<h2> </h2>,
<h3> </h3>,
<h4> </h4>,
<h5> </h5>,
<h6> </h6>,
<footer> </footer>,
<i> </i>,
<b> </b>,
<u> </u>,
<q> </q>
]

const wordSplit = elementsArray[1].split(" ")
const [startTag, endTag] =  wordSplit

return (
    <Fragment>
    <h1>ELEMENTS DATA</h1>
        {/* {elementsArray[1]} */}
        {/* {wordSplit[0]} text that needs to be divd
        {" " + wordSplit[1]} */}
        
        {startTag + " "}
        things
        {" " + endTag}
    </Fragment>  );
}
export default ElementData;