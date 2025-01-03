// import { useState } from 'react';
// import { ImageCard } from './components/ProductCard/ImageCard';
// import { CardData } from './types/cardData';
import { StartPage } from './components/StartPage/StartPage';
import './App.scss';
import '../src/components/StartPage/StartPage.scss';
import { SongOfTheDay } from './components/SongOfTheDay/SongOfTheDay';
import { PhotoOfTheDay } from './components/PhotoOfTheDay/PhotoOfTheDay';
import { Phrase } from './components/Phrase/Phrase';
import { Joke } from './components/Joke/Joke';
import { Footer } from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import { Archive } from './components/Archive/Archive';
import { Archive10_12_24 } from './components/Archive/10_12_24/Archive10_12_24';
import { Archive20_12_24 } from './components/Archive/20_12_24/20_12-24';

const App: React.FC = () => {
  // const [cards, setCards] = useState<CardData[]>([]);

  // const loadCards = async () => {
  //   try {
  //     // const response = await fetch('/API/cardsData.json');
  //     // const data: CardData[] = await response.json();
  //     // setCards(data);
  //   } catch (error) {
  //     throw new Error(`Error has occurred: ${error}`);
  //   }
  // };

  // loadCards();

  return (
    <body className="body" id="body">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <StartPage />
              <PhotoOfTheDay />
              <SongOfTheDay />
              <Joke />
              <Phrase />
              <Footer />
            </>
          }
        />
        <Route path="/archive" element={<Archive />} />
        <Route path="/archive/archive10_12_24" element={<Archive10_12_24 />} />
        <Route path="/archive/archive20_12_24" element={<Archive20_12_24 />} />
      </Routes>
      {/* <div className="card-container">
        {cards.map((card, index) => (
          <ImageCard
            key={index}
            mainImage={card.mainImage}
            thumbnails={card.thumbnails}
            description={card.description}
          />
        ))}
      </div> */}
    </body>
  );
};

export default App;
