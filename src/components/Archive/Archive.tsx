import React from 'react';
import '../Archive/Archive.scss';
import '../StartPage/StartPage.scss';
import '../SongOfTheDay/SongOfTheDay.scss';
import '../Phrase/Phrase.scss';
import '../PhotoOfTheDay/PhotoOfTheDay.scss';
import '../Footer/Footer.scss';

import { Link } from 'react-router-dom';

export const Archive: React.FC = () => (
  <div className="icon__wrapper">
    <div className="icon__container--archive" id="archive">
      <Link className="link" to="/">
        <img
          className="image is-64x64"
          src="/images/icons/phrase.png"
          alt="photo"
        />
        <h3 className="icon__title">Home</h3>
      </Link>
    </div>
    <div className="archive__container">
      <Link className="link" to="archive10_12_24">
        <img
          className="image is-64x64"
          src="/images/icons/phrase.png"
          alt="photo"
        />
        <h3 className="icon__title">10/12/24</h3>
      </Link>
      <Link className="link" to="archive20_12_24">
        <img
          className="image is-64x64"
          src="/images/icons/phrase.png"
          alt="photo"
        />
        <h3 className="icon__title">20/12/24</h3>
      </Link>
    </div>
  </div>
);
