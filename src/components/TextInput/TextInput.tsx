import React from 'react';

import './TextInput.scss';

interface Props {
  error?: string;
  handleChange: (value: string) => void;
  label?: string;
  name: string;
  placeholder?: string;
  type?: string;
  value?: string;
  fullWidth?: boolean;
}

export const TextInput = ({
                            label,
                            name,
                            placeholder,
                            value,
                            handleChange,
                            error,
                            fullWidth,
                            type = 'text'
                          }: Props) => {
  return (
    <div className={`text-input ${fullWidth ? 'text-input--full-width' : ''}`}>
      {label && <label className="text-input__label" htmlFor={name}>{label}</label>}
      <input className="text-input__input-field" id={name} type={type} value={value} placeholder={placeholder}
             onChange={e => handleChange(e.target.value)} />
      {error && <p className="text-input__error">{error}</p>}
    </div>
  );
}

export default TextInput;
