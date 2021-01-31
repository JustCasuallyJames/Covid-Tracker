import React from 'react';

const Checkbox = ({ type = "checkbox", name, value, checked = false, onChange }) => {

  return (
    <input type={type} name={name} value={value} onChange={onChange} className="symptom"/>
  );
};

export default Checkbox;