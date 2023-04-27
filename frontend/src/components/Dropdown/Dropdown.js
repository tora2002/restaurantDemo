import React from "react";
import "./Dropdown.css";
const { useState } = React;

function Dropdown( {headerTxt, contents, selectedItems, setSelectedItems} ) {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(contents.map( (content, index) =>
    ({
      id: index,
      label: content,
      clicked: false
    })));

  const toggleDropdown = () => setOpen(!isOpen);
  
  // append item to array if it doesn't already exist, else remove 
  const handleItemClick = (id) => {
    if (!selectedItems.includes(id)) {
      setSelectedItems([...selectedItems, id]);
      items[id].clicked = true;
    } else {
      setSelectedItems(selectedItems.filter(item => item !== id))
      items[id].clicked = false;
    }
  };

  return (
    <div className="dropdown">
      <div className={`dropdown-header ${isOpen && "open"}`} onClick={toggleDropdown}>
        {headerTxt}
      </div>
      {isOpen && <div className={`dropdown-body`}>
        {items.map((item) => (
          <div
            className={`dropdown-item ${item.clicked && "clicked"}`}
            onClick={(e) => handleItemClick(e.target.id)}
            id={item.id}
            key={item.id}
          >
            {item.label}
          </div>
        ))}
      </div>}
    </div>
  );
};

export default Dropdown;
