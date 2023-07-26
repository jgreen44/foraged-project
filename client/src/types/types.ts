import React from 'react';

export interface IStreak {
  str: string;
  count: number;
}

export interface ITextBox {
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
  className: string;
}
