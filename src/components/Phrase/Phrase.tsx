import React from 'react';
import '../Phrase/Phrase.css';

export const Phrase: React.FC = () => (
  <div className="phrase__container" id="phrase">
    <h2 className="phrase__title">"words of wisdom"</h2>
    <h3 className='phrase__text'>Святий Боже, Святий Кріпкий - краще дома, ніж у рідної тітки! <br/><br/>(с) Моя Бабуля 1941 р.н.</h3>
    <h3 className='phrase__text'>Бажаю щоб у кожного було своє місце сили - де вас завжди чекають і куди завжди хочеться повертатись</h3>
    <img className='phrase__pic' src="/images/phrase-10_12_24.jpg" alt="fireplace" />
  </div>
);