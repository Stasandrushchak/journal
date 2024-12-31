import React from 'react';
import '../../Archive/Archive.scss';
import '../../StartPage/StartPage.scss';
import '../../SongOfTheDay/SongOfTheDay.scss';
import '../../Phrase/Phrase.scss';
import '../../PhotoOfTheDay/PhotoOfTheDay.scss';
import '../../Footer/Footer.scss';
import './20_12-24.scss';

import { Link } from 'react-router-dom';

export const Archive20_12_24: React.FC = () => (
  <div className="archive__wrapper">
    <div className="icon__container--archive" id="archive">
      <Link className="icon__link" to="/">
        <img className="image is-64x64" src="/images/icons/phrase.png" alt="photo" />
        <h3 className="icon__title">Home</h3>
      </Link>
    </div>
    <div className="song__container" id="song">
      <h2 className="song__title">"Song of the day"</h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/jLmZMal27AM?si=r_PchGlcI212TP4I"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <hr />
    </div>
    <div className="photo__container-20_12_24" id="photo">
      <h2 className="photo__title">"Photo of the day"</h2>
    </div>
    <div className="phrase__container" id="phrase">
      <h2 className="phrase__title">"words of wisdom"</h2>
      <h3 className="phrase__text">
        Мечта - мечтой но нада так чтоб за мечтой не чалиться
        <br />
        Судьба - не тёлка на час, но и не начальница
        <br />
        Кто-то получает всё - у кого-то не получается
        <br />
        <br />
        (с) Никита АрХангел{' '}
        <a href="https://www.youtube.com/watch?v=MIrxKZGBSfc">
          АрХангел - Ливни
        </a>
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
      <h3 className="phrase__text">Бажаю щоб кожному з нас було з ким</h3>
      <img
        className="phrase__pic"
        src="/images/20_12_24/hands.png"
        alt="fireplace"
      />
    </div>
  </div>
);
