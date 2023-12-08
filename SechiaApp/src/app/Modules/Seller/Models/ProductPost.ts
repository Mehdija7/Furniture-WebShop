export interface ProductPost {
  name: string;
  dimension: string | null;
  price: Number;
  shortDescription: string;
  longDescription: string;
  image: string;
  categoryId: Number;
  roomId: Number;
}
