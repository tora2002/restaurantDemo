import React from 'react';
import './Card.css'

function Card( {content, isFloating} ) {
    return (
        <div className={isFloating ? 'floating-card' : 'outline-card'}>
            {content}
        </div>
    );
}

export default Card;