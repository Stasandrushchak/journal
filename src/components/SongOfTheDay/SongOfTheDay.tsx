import React from 'react';
import '../SongOfTheDay/SongOfTheDay.css';

export const SongOfTheDay: React.FC = () => (
  <div className="song__container" id="song">
    <h2 className="song__title">"Song of the day"</h2>
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
    <hr/>
  </div>
);
