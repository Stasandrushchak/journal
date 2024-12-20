import React from 'react';
import '../Phrase/Phrase.scss';

export const Joke: React.FC = () => (
  <div className="phrase__container" id="joke">
    <h2 className="phrase__title">"Joke of the day"</h2>
    <h3 className="phrase__text">
      Еврейский юмор
      <br />
      – Роза, хотите пойти со мной в музей?
      <br />– Яша, Вы шо, слово «рэсторан» не выговариваете?
    </h3>
  </div>
);
