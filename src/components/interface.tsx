export interface Card {
  id: number;
  text: string;
  pic: string;
  data: string;
}

export interface cardsInterface {
  items: { id: number; text: string; pic: string; data: string }[];
  deletePost: (id: number) => void;
  editText: (id: number) => void;
}
