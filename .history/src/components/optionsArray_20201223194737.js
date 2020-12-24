import React, {Fragment, useState} from 'react'
// &lt;
// &gt; 
// const ElementData = () => {
export const optionsArray =
[
// "&lt;abbr>&lt;/abbr&gt;",
{type: "div": "<div> </div>"},
{type: "span": "<span> </span>"},
{type: "html": "<html> </html>"},
{type: "head": "<head> </head>"},
{type: "body": "<body> </body>"},
{type: "ul: "<ul> </ul>"},
{type: "ol: "<ol> </ol>"},
{type: "lh: "<lh> </lh>"},
{type: "li: "<li> </li>"},
{type: "table: "<table> </table>"},

{type: "title: "<title> </title>"},
{type: "thead: "<thead> </thead>"},

{type: "tbody: "<tbody> </tbody>"},
{type: "tr: "<tr> </tr>"},
{type: "th: "<th> </th>"},
{type: "pre: "<pre> </pre>"},
{type: "p: "<p> </p>"},
{type: "nav: "<nav> </nav>"},
{type: "main: "<main> </main>"},
{type: "header: "<header> </header>"},
{type: "h1", value: "<h1> </h1>"},
{type: "h2", value: "<h2> </h2>"},
{type: "h3", value: "<h3> </h3>"},
{type: "h4", value: "<h4> </h4>"},
{type: "h5", value: "<h5> </h5>"},
{type: "h6", value: "<h6> </h6>"},
{type: "footer: "<footer> </footer>"},
{type: "i": "<i> </i>"},
{type: "b": "<b> </b>"},
{type: "u": "<u> </u>"},
{type: "q": "<q> </q>"}
]

const firstNames = optionsArray.map( e => e)

console.log("first names", firstNames)
// const wordSplit = elementsArray[1].split(" ")
// const wordSplit = elementsArray //.split(" ")
// const [startTag, endTag] =  wordSplit
// console.log("wordSplit", wordSplit)
// console.log("wordSplit[0]", wordSplit[0]["div"])
// return (
//     <Fragment>
//     <h1>ELEMENTS DATA</h1>
//         {/* {elementsArray[1]} */}
//         {/* {wordSplit[0]} text that needs to be divd
//         {" " + wordSplit[1]} */}
//         {/* {wordSplit} */}
//         {/* {startTag + " "}
//         things
//         {" " + endTag} */}
//     </Fragment>  );
// }
// export default optionsArray;