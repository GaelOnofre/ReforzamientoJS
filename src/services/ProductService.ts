import type { RsAPI, PrProductos } from '../models/product';

export const obtenerPromociones = async (): Promise<PrProductos[]> => {
  const respuesta = await fetch('https://dummyjson.com/products');
  const datos: RsAPI = await respuesta.json();

  const filtrados = datos.products.filter(
    (p) => p.rating >= 4.5 && p.stock > 10
  );

  const candidatos: PrProductos[] = filtrados.map((item) => {
    const { title, price, rating, stock } = item;
    return {
      nombre: title,
      precio: price,
      rating: rating,
      stock: stock
    };
  });

  return candidatos;
};
