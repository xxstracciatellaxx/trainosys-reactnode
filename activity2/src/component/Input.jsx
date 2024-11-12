import React from 'react';
const Input = ({label, type, placeholder})  => {
    return(
        <div className="input-container">
        <label className ="label" htmlFor={label.toLowerCase()}> {label} <br></br></label> 
        <input
          id={label.toLowerCase()}
          type={type}
          placeholder={placeholder}
          className="input"
        />
      </div>
    );
};
export default Input;