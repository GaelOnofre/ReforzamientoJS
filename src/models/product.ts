export interface Productos {
  id: number;
  title: string;
  price: number;
  rating: number;
  stock: number;
}

export interface RsAPI {
  products: Productos[];
}

export interface PrProductos {
  nombre: string;
  precio: number;
  rating: number;
  stock: number;
}