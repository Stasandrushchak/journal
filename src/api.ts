import { CardData } from "./types/cardData";

const BASE_URL: string = 'https://github.com/Stasandrushchak/journal-cards/blob/master/';

export const get = async (url: string): Promise<CardData[]> => {
  const fullURL = `${BASE_URL + url}.json`;
  const response = await fetch(fullURL);

  if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.statusText}`);
  }

  return response.json() as Promise<CardData[]>;
};

export const getCards = () => get('cardsData');