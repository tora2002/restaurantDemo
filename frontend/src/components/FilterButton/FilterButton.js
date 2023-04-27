import React from 'react';
import './FilterButton.css'

function FilterButton ( {content, onFilter, onClickHandler} ) {
    return (
       <button className={onFilter ? 'onFilterBtn' : 'defaultFilterBtn'} onClick={onClickHandler}>
            {content}
       </button>
    );
}

export default FilterButton;