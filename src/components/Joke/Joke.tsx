import React from 'react';
import '../Phrase/Phrase.scss';

export const Joke: React.FC = () => (
  <div className="phrase__container" id="joke">
    <h2 className="phrase__title">"Joke of the day"</h2>
    <h3 className="phrase__text">
      — А давайте устроим праздник молодого вина!
      <br />— Петрович, а давай брага всё-таки выстоит положенный срок.
    </h3>
  </div>
);
