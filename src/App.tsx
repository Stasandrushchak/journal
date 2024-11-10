import { useState } from 'react';
import { ImageCard } from './components/ProductCard/ImageCard';
import { CardData } from './types/cardData';
import { StartPage } from './components/StartPage/StartPage';
import './App.css'

const App = () => {
  const [cards, setCards] = useState<CardData[]>([]);

  const loadCards = async () => {
    try {
      const response = await fetch('/API/cardsData.json');
      const data: CardData[] = await response.json();
      setCards(data);
    } catch (error) {
      throw new Error(`Error has occurred: ${error}`);
    }
  };

  loadCards();

  return (
    <body className='body'>
    <StartPage/>
    <div className="card-container">
      {cards.map((card, index) => (
        <ImageCard
          key={index}
          mainImage={card.mainImage}
          thumbnails={card.thumbnails}   
          description={card.description}
        />
      ))}
    </div>
    </body>
  );
};

export default App;
