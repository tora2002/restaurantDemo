import React from 'react';
import './Tag.css'

/* Note: Call tag in the following format
<Tag tagType={'price'} text = {'$20'}/>
<Tag tagType={'cuisine'} text ={'mexican'}/>
*/

function Tag({tagType = 'default', text}) {
return(
<button className= {`tag ${tagType.toLowerCase()}Tag`}>
{text}
</button>
);
}

export default Tag;