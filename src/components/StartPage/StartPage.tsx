import React from 'react';
import './StartPage.css';

export const StartPage: React.FC = () => (
  <div className="start-text">
    <h1 className="greetings">Entertaining Content Broadcast Channel</h1>
    <h2 className="advice">... Chill & Enjoy</h2>
    <div className="nav-container">
      <div className="icon__container">
        <a className='icon__link'  href="#photo">
          <img className="icon" src="/images/icons/photo.gif" alt="photo" />
          <h3 className='icon__title'>photo of the day</h3>
        </a>
      </div>
      <div className="icon__container">
        <a className='icon__link' href="#song">
          <img className="icon" src="/images/icons/song.gif" alt="song icon" />
          <h3 className='icon__title'>song of the day</h3>
        </a>
      </div>
      <div className="icon__container">
        <a  className='icon__link' href="#joke">
          <img
            className="icon"
            src="/images/icons/joke1.gif"
            alt="smile icon"
          />
          <h3 className='icon__title'>todays joke</h3>
        </a>
      </div>
      <div className="icon__container">
        <a  className='icon__link' href="#phrase">
          <img
            className="icon"
            src="/images/icons/phrase.gif"
            alt="phrase of wisdom"
          />
          <h3 className='icon__title'>Words of wisdom</h3>
        </a>
      </div>
    </div>

  </div>
);
