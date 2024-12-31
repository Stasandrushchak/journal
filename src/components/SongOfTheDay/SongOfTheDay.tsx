import React from 'react';
import '../SongOfTheDay/SongOfTheDay.scss';

export const SongOfTheDay: React.FC = () => (
  <div className="song__container" id="song">
    <h2 className="song__title">"Song of the day"</h2>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/3Uo0JAUWijM?si=lfna3VscedAGlx7t"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
    <hr />
  </div>
);
