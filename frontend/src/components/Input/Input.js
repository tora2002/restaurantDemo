import React from 'react';
import './Input.css';

function Input( {className, placeholder, id, value} ) {
  return (
    <input
      className={"custom-input " + className} // add a class name to your custom input
      placeholder={placeholder}
      id={id}
      value={value}
    />
  );
}

export default Input;
