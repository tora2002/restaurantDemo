import React from 'react';
import './Button.css'

function Button( {text, onClickHandler} ) {
    return(
        <button class = "parentButton" onClick={onClickHandler}>
            {text}
        </button>
    );
}

export default Button;
