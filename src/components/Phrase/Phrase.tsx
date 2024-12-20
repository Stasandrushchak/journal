import React from 'react';
import '../Phrase/Phrase.scss';

export const Phrase: React.FC = () => (
  <>
  <div className="phrase__container" id="phrase">
    <h2 className="phrase__title">"words of wisdom"</h2>
    <h3 className="phrase__text">
    Мечта - мечтой но нада так чтоб за мечтой не чалиться<br/>
    Судьба - не тёлка на час, но и не начальница<br/>
    Кто-то получает всё - у кого-то не получается<br/><br/>
    (с) Никита АрХангел <a href='https://www.youtube.com/watch?v=MIrxKZGBSfc'>АрХангел - Ливни</a>
    </h3>
  </div>
  <div className="phrase__container" id="phrase">
    <h2 className="phrase__title">"Grandma talks..."</h2>
    <h3 className="phrase__text">
      сирі дрова густий дим
      <br />
      погуляла б нема з ким <br />
      <br />
      (с) Моя Бабуля 1941 р.н.
    </h3>
    <h3 className="phrase__text">
      Бажаю щоб кожному з нас було з ким
    </h3>
    <img
      className="phrase__pic"
      src="/images/20_12_24/hands.png"
      alt="fireplace"
    />
  </div>
  </>
);
