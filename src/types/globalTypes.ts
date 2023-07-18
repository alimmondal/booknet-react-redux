export interface IBook {
  _id: number;
  title: string;
  image: string;
  author: string;
  genre: string;
  publicationDate: string;
  price: number;
  rating: number;
  quantity?: number;
}
