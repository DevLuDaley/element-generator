import React, {Fragment, useState} from 'react'
// &lt;
// &gt; 
// const ElementData = () => {
export const optionsArray =
[
// "&lt;abbr>&lt;/abbr&gt;",
{type: "div", value: "<div> </div>"},
{type: "span", value: "<span> </span>"},
{type: "html", value: "<html> </html>"},
{type: "head", value: "<head> </head>"},
{type: "body", value: "<body> </body>"},
{type: "ul", value: "<ul> </ul>"},
{type: "ol", value: "<ol> </ol>"},
{type: "lh", value: "<lh> </lh>"},
{type: "li", value: "<li> </li>"},
{type: "table", value: "<table> </table>"},

{type: "title", value: "<title> </title>"},
{type: "thead", value: "<thead> </thead>"},

{type: "tbody", value: "<tbody> </tbody>"},
{type: "tr", value: "<tr> </tr>"},
{type: "th", value: "<th> </th>"},
{type: "pre", value: "<pre> </pre>"},
{type: "p", value: "<p> </p>"},
{type: "nav", value: "<nav> </nav>"},
{type: "main", value: "<main> </main>"},
{type: "header", value: "<header> </header>"},
{type: "h1", value: "<h1> </h1>"},
{type: "h2", value: "<h2> </h2>"},
{type: "h3", value: "<h3> </h3>"},
{type: "h4", value: "<h4> </h4>"},
{type: "h5", value: "<h5> </h5>"},
{type: "h6", value: "<h6> </h6>"},
{type: "footer", value: "<footer> </footer>"},
{type: "i", value: "<i> </i>"},
{type: "b", value: "<b> </b>"},
{type: "u", value: "<u> </u>"},
{type: "q", value: "<q> </q>"}
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