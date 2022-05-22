export type Collection = {
  code: string;
  name: string;
};

export type Country = {
  code: string;
  name: string;
  native: string;
  phone: string;
  capital: string;
  currency: string;
  emoji: string;
  emojiU: string;

  continent: Continent;
  languages: Collection[];
  states: Collection[];
};

export type Continent = {
  code: string;
  name: string;
  countries: Country[];
};
