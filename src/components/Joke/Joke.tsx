import React from 'react';
import '../Phrase/Phrase.css';

export const Joke: React.FC = () => (
  <div className="phrase__container" id="joke">
    <h2 className="phrase__title">"Joke of the day"</h2>
    <h3 className="phrase__text">
      Анекдот о том, как Вовочка считает!
      <br />
      Приходит Вовочка в первый класс.
      <br />
      – А ты считать умеешь? – интересуется учительница.
      <br />
      В: – Один, два, три, четыре, пять, шесть, семь …<br />
      Учительница: – А дальше знаешь?
      <br />
      В: – … восемь, девять, десять, валет, дама, король, туз …
    </h3>
  </div>
);
