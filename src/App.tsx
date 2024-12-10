// import { useState } from 'react';
// import { ImageCard } from './components/ProductCard/ImageCard';
// import { CardData } from './types/cardData';
import { StartPage } from './components/StartPage/StartPage';
import './App.css';
import { SongOfTheDay } from './components/SongOfTheDay/SongOfTheDay';
import { PhotoOfTheDay } from './components/PhotoOfTheDay/PhotoOfTheDay';
import { Phrase } from './components/Phrase/Phrase';
import { Joke } from './components/Joke/Joke';
import { Footer } from './components/Footer/Footer';

const App = () => {
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
    <body className="body">
      <StartPage />
      <PhotoOfTheDay />
      <SongOfTheDay />
      <Joke />
      <Phrase />
      <Footer />

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
