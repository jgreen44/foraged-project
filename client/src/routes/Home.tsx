import './Home.styles.css';

import axios from 'axios';
import React, { useState } from 'react';

import { TextInput } from '../components/TextInput';
import { IStreak } from '../types/types';

export const Home: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [streak, setStreak] = useState<IStreak>({ str: '', count: 0 });

  const checkText = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    console.log(input);
    setInput(text);

    try {
      const response = await axios.post<IStreak>('http://localhost:5000/check-text/', { text });
      setStreak(response.data);
    } catch (error) {
      console.error(`Error checking streak: ${error}`);
    }
  };
  return (
    <div>
      <h1 className={'app-title'}>Even/Odd Streak Counter</h1>
      <TextInput
        value={input}
        onChangeHandler={checkText}
        className={'text-input'}
        placeholder={'Enter text here...'}
      />
      <p className={'streak-count-display'}>{streak.str}</p>
      <p className={'streak-count'}>Total streak count: {streak.count}</p>
    </div>
  );
};

export default Home;
