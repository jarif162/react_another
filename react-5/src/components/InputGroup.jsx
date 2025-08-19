import React from "react";

function InputGroup({ htmlFor, onChange, value, type, name, label }) {
  return (
    <>
      <div>
        <label htmlFor={htmlFor}>{label}</label>
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder="Enter your name"
          required
        />
      </div>
    </>
  );
}

export default InputGroup;
