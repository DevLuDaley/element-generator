import React, {Fragment} from 'react'

const Elements = () => {
    const p = "&lt;"
    var pTags// = `&lt;/p&gt;`
    
    return (<Fragment>
    <h1>ELEMENTS [OPTIONS DROPDOWN MENU]</h1>

<select>
<option
    value="&lt;p&gt; &lt;/p&gt;"
>ptag
</option>

<option
value="&lt;H1&gt; &lt;/H1&gt;"
>H1
</option>

<option
value="&lt;H2&gt; &lt;/H2&gt;"
>H2
</option>

    &lt;H1&gt;
    &lt;/H1&gt;
    
    &lt;H2&gt;
    &lt;/H2&gt;
    
    &lt;H3&gt;
    &lt;/H3&gt;
    
    &lt;H4&gt;
    &lt;/H4&gt;
    
    &lt;H5&gt;
    &lt;/H5&gt;
    
    &lt;H6&gt;
    &lt;/H6&gt;
</select>

    {/* {p} */}

    </Fragment>)
}
export default Elements;