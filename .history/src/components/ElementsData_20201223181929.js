import React, {Fragment, useState} from 'react'
// &lt;
// &gt;
const ElementData = () => {
const elementsArray = [
// "&lt;abbr>&lt;/abbr&gt;",
{div: "<div> </div>"},
{span: "<span> </span>"},
{html: "<html> </html>"},
{head: "<head> </head>"},
{body: "<body> </body>"},
{ul: "<ul> </ul>"},
{ol: "<ol> </ol>"},
{lh: "<lh> </lh>"},
{li: "<li> </li>"},
{table: "<table> </table>"},

{title: "<title> </title>"},
{thead: "<thead> </thead>"},

{tbody: "<tbody> </tbody>"},
{tr: "<tr> </tr>"},
{th: "<th> </th>"},
{pre: "<pre> </pre>"},
{p: "<p> </p>"},
{nav: "<nav> </nav>"},
{main: "<main> </main>"},
{header: "<header> </header>"},
{h1: "<h1> </h1>"},
{h2: "<h2> </h2>"},
{h3: "<h3> </h3>"},
{h4: "<h4> </h4>"},
{h5: "<h5> </h5>"},
{h6: "<h6> </h6>"},
{footer: "<footer> </footer>"},
{i: "<i> </i>"},
{b: "<b> </b>"},
{u: "<u> </u>"},
{q: "<q> </q>"}
]

// const wordSplit = elementsArray[1].split(" ")
const wordSplit = elementsArray //.split(" ")
// const [startTag, endTag] =  wordSplit
console.log("wordSplit", wordSplit["div"])
return (
    <Fragment>
    <h1>ELEMENTS DATA</h1>
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