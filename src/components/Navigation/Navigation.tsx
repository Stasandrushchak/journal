import React from 'react';
import './Navigation.scss';
import { Link } from 'react-router-dom';

export const Navigation: React.FC = () => (
  <nav className="navbar" role="navigation" aria-label="dropdown navigation">
    <div className="navbar-item has-dropdown is-hoverable">
      <a className="navbar-link is-arrowless">
        <img
          className="nav-icon"
          src="/images/icons/nav-menu.png"
          alt="nav-menu icon"
        />
      </a>

      <div className="navbar-dropdown">
        <a className="navbar-item" href="#photo">
          <figure className="image is-64x64 nav__image-icon--photo"></figure>

          <h3 className="navbar-item__text--title">Photo of the day</h3>
        </a>
        <a className="navbar-item" href="#song">
          <figure className="image is-64x64 nav__image-icon--song"></figure>
          <h3 className="navbar-item__text--title">Song of the day</h3>
        </a>
        <a className="navbar-item" href="#joke">
          <figure className="image is-64x64 nav__image-icon--joke"></figure>
          <h3 className="navbar-item__text--title">Joke of the day</h3>
        </a>
        <a className="navbar-item" href="#phrase">
          <figure className="image is-64x64 nav__image-icon--phrase"></figure>
          <h3 className="navbar-item__text--title">Words of wisdom</h3>
        </a>
        <Link className="navbar-item" to="/archive">
          <figure className="image is-64x64 nav__image-icon--archive"></figure>
          <h3 className="navbar-item__text--title">Archive</h3>
        </Link>
      </div>
    </div>
  </nav>
);
