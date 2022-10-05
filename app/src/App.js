import React, { useState } from 'react';
import './App.css';

const professionDictionary = {
  '🍇': 'Grapes',
  '🍈': 'Melon',
  '🍉': 'Watermelon',
  '🍊': 'Tangerine',
  '🍋': 'Lemon',
  '🍌': 'Banana',
  '🍍': 'Pineapple',
  '🥭': 'Mango',
  '🍎': 'Red Apple',
  '🍏': 'Green Apple',
  '🍐': 'Pear',
  '🍑': 'Peach',
  '🍒': 'Cherries',
  '🍓': 'Strawberry',
};

const professions = Object.keys(professionDictionary);

export default function App() {
  const [profession, setProfession] = useState('');
  const [meaning, setMeaning] = useState('Translation will appear here..');

  function changeHandler(event) {
    const inputProfession = event.target.value;
    setProfession(inputProfession);

    if (inputProfession in professionDictionary) {
      setMeaning(professionDictionary[inputProfession]);
    } else {
      setMeaning('NO Such fruit in Database!!');
    }
  }

  function onProfessionClick(inputProfession) {
    setMeaning(professionDictionary[inputProfession]);
  }

  return (
    <div className='App'>
      <div className='bg-color'>
        <h1> Fruits </h1>
        <h2>Inside Out</h2>
        <input
        className='search'
          onChange={changeHandler}
          value={profession}
          placeholder={'Search a Fruit'}

        />
        <h2> {profession} </h2>
        <h3> {meaning} </h3>
        {professions.map((profession) => (
          <span
            onClick={() => onProfessionClick(profession)}
            className="fruits"
          >
            {' '}
            {profession}{' '}
          </span>
        ))}
      </div>
    </div>
  );
}
