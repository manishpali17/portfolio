export interface Card {
  icon: string;
  title: string;
  keyword: string;
  image: string;
  bgColor: string;
  link?: string;
}

export type InfiniteCards = Card[];

export interface Item {
  title: string;
  keyword: string;
  icon: string;
  url: string;
}

export type ProjectListing = Card[];

export interface Stack {
  stackItemsFrontend: Item[];
  stackItemsBackend: Item[];
  stackItemsDatabase: Item[];
  language: Item[];
  tools: Item[];
}
