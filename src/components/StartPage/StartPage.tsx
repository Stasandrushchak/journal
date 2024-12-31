import React from 'react';
import './StartPage.scss';
import { Navigation } from '../Navigation/Navigation';

export const StartPage: React.FC = () => (
  <div className="start-text" id='start-page'>

    <Navigation/>
    <h1 className="greetings">Entertaining Content Broadcast Channel</h1>

    <h2 className="advice">... Chill & Enjoy</h2>
  </div>
);
