import React from 'react'

const FormInput = ({id, label, name, type, placeholder, value, onChange }) => {
  return (
    <div className="form-input">
        <label htmlFor={id}>{label}</label>
        <input 
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value} 
            onChange={onChange}
        ></input>
    </div>
  )
}

export default FormInput