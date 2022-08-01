export interface Card {
  title: string;
  id: number;
  text: string;
  pic: string;
  data: string;
}

export interface cardsInterface {
  items: {
    title: string;
    id: number;
    text: string;
    pic: string;
    data: string;
  }[];
  deletePost: (id: number) => void;
  editText: (id: number) => void;
}
