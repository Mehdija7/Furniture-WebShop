export interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
    shortDescription: string;
    longDescription: string | null;
    dimension: string | null;
    category: any;
    room: any;
}
