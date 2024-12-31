import React from 'react';
import './StartPage.scss';
import { Link } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';

export const StartPage: React.FC = () => (
  <div className="start-text" id='start-page'>

    <Navigation/>
    <h1 className="greetings">Entertaining Content Broadcast Channel</h1>

    <h2 className="advice">... Chill & Enjoy</h2>
    {/* <div className="nav-container1">
      <div className="icon1__container1">
        <a className="icon1__link1" href="#photo">
          <img className="icon1__image1" src="/images/icons/photo.gif" alt="photo" />
          <h3 className="icon1__title1">photo of the day</h3>
        </a>
      </div>
      <div className="icon__container1">
        <a className="icon__link1" href="#song">
          <img className="icon__image1" src="/images/icons/song.gif" alt="song icon" />
          <h3 className="icon__title1">song of the day</h3>
        </a>
      </div>
      <div className="icon__container1">
        <a className="icon__link1" href="#joke">
          <img
            className="icon__image1"
            src="/images/icons/joke1.gif"
            alt="smile icon"
          />
          <h3 className="icon__title1">todays joke</h3>
        </a>
      </div>
      <div className="icon__container1">
        <a className="icon__link1" href="#phrase">
          <img
            className="icon__image1"
            src="/images/icons/phrase.gif"
            alt="phrase of wisdom"
          />
          <h3 className="icon__title1">Words of wisdom</h3>
        </a>
      </div>
      <div className="icon__container1">
        <Link className="icon__link1" to="/archive">
          <img className="icon__image1" src="/images/icons/archive.gif" alt="archive" />
          <h3 className="icon__title1">Archive</h3>
        </Link>
      </div>
    </div> */}
  </div>
);
