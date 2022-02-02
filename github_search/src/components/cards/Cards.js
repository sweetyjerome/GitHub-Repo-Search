import React from 'react';

function Cards (props) {
    return(
        <div>
        <hr></hr>
        <a href={props.data.html_url}>{props.data.name}</a>

        
    </div>
    )
}

export default Cards;