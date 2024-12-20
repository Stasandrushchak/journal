import React from 'react';
import '../../Archive/Archive.scss';
import '../../StartPage/StartPage.scss';
import '../../SongOfTheDay/SongOfTheDay.scss';
import '../../Phrase/Phrase.scss';
import '../../PhotoOfTheDay/PhotoOfTheDay.scss';
import '../../Footer/Footer.scss';
import './10_12_24.scss'

import { Link } from 'react-router-dom';

export const Archive10_12_24: React.FC = () => (
  <div className="archive__wrapper">
    <div className="icon__container--archive" id="archive">
      <Link className="icon__link" to="/">
        <img className="icon" src="/images/icons/phrase.png" alt="photo" />
        <h3 className="icon__title">Home</h3>
      </Link>
    </div>
    <div className="iframe">
    <h2 className="song__title--archive">"Song of the day"</h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/GuI44UNrR4g?si=6Cmkkq5tdeKuons-"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
    <div className="photo__container-10_12_24" id="photo">
      <h2 className="photo__title">"Photo of the day"</h2>
    </div>
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
    <div className="phrase__container" id="phrase">
      <h2 className="phrase__title">"words of wisdom"</h2>
      <h3 className="phrase__text">
        Святий Боже, Святий Кріпкий - краще дома, ніж у рідної тітки! <br />
        <br />
        (с) Моя Бабуля 1941 р.н.
      </h3>
      <h3 className="phrase__text">
        Бажаю щоб у кожного було своє місце сили - де вас завжди чекають і куди
        завжди хочеться повертатись
      </h3>
      <img
        className="phrase__pic"
        src="/images/phrase-10_12_24.jpg"
        alt="fireplace"
      />
    </div>
  </div>
);
