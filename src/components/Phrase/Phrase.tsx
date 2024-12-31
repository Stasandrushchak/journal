import React from 'react';
import '../Phrase/Phrase.scss';

export const Phrase: React.FC = () => (
  <>
  <div className="phrase__container" id="phrase">
    <h2 className="phrase__title">"words of wisdom"</h2>
    <h3 className="phrase__text">
    Так я став цинічним - мені крити це нІчим<br />
    Це може змусити тебе почуватись пригніченим<br />
    Я не відчував відчаю навіть коли покарний був і духовно понівечений<br />
    <br />
    (с) <a className='phrase__text' href="https://www.youtube.com/watch?v=vYB18WngTXY">Микита АрХангел - Південь</a>
      </h3>
  </div>
  <div className="phrase__container" id="phrase">
    <h2 className="phrase__title">"Grandma talks..."</h2>
    <h3 className="phrase__text">
      Одна другій не вірила -
      <br />
      взяла палку й переміряла
      <br />
      <br />
      (с) Моя Бабуля 1941 р.н.
    </h3>
    {/* <h3 className="phrase__text">
      Бажаю щоб кожному з нас було з ким
    </h3> */}
    <img
      className="phrase__pic"
      src="/images/31_12_24/2-ukr-girls.jpg"
      alt="fireplace"
    />
  </div>
  </>
);
