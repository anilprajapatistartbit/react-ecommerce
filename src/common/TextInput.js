import React from 'react';
import '../assets/css/Checkout.css'
const TextInput = ({ label, name, value, onChange, placeholder, iconClass, isRequired, error }) => {
    const handleInputBlur = (e) => {
      if (isRequired && !e.target.value) {
        e.target.setCustomValidity('This field is required');
      } else {
        e.target.setCustomValidity('');
      }
    };
  
    return (
      <div >
        <label htmlFor={name}>
          {iconClass && <i className={iconClass} />} {label}
          {isRequired && <span className="required-field">*</span>}
        </label>
        <input
          type="text"
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={handleInputBlur}
          placeholder={placeholder}
          className={`cform form-control ${error ? 'is-invalid' : ''}`} // Add 'is-invalid' class for styling
          required={isRequired}
        />
        {error && <div className="invalid-feedback">{error}</div>} {/* Display error message */}
      </div>
    );
  };
  
  export default TextInput;