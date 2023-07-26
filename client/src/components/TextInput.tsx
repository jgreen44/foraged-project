import './TextInput.styles.css';

import React from 'react';

import { ITextBox } from '../types/types';

export const TextInput: React.FC<ITextBox> = ({ onChangeHandler, placeholder, className, value }) => {
  return (
    <input
      type={'text'}
      className={`${className}`}
      placeholder={placeholder}
      onChange={onChangeHandler}
      value={value}
    />
  );
};
