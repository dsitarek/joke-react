import React, { useState } from 'react';
import getJoke from '../data/jokeData';
import JokeComponent from './JokeComponent';

export default function App() {
  const [btnText, setBtnText] = useState('Get a Joke');
  const [joke, setJoke] = useState({});

  const getAJoke = () => {
    getJoke().then((obj) => {
      setJoke({
        setup: obj.setup,
        punchline: obj.delivery,
      });
      setBtnText('Get Punchline');
    });
  };

  const changeBtnText = (text) => {
    setBtnText(text);
  };

  return (
    <>
      <div className="joke-container">
        <JokeComponent joke={joke} btnText={btnText} />
        <div className="btn-container">
          {
          btnText === 'Get a Joke' || btnText === 'Get A New Joke'
            ? <button id="jokeBtn" type="button" className="btn btn-primary" onClick={getAJoke}>{btnText}</button>
            : <button id="jokeBtn" type="button" className="btn btn-primary" onClick={() => changeBtnText('Get A New Joke')}>{btnText}</button>
            }
        </div>
      </div>
    </>
  );
}
