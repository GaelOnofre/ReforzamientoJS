import type { RsAPI, PrProductos } from '../models/product';

export const obtenerDatos = async () => {
  const respuesta = await fetch('https://dummyjson.com/products');
  const datos: RsAPI = await respuesta.json();

  const totalInventarioGeneral = datos.products.reduce((total, p) => {
    return total + (p.price * p.stock);
  }, 0);

  const filtrados = datos.products.filter(
    (p) => p.rating >= 4.5 && p.stock > 10
  );

  const productosPromo: PrProductos[] = filtrados.map((item) => {
    const { title, price, rating, stock } = item;
    return {
      nombre: title,
      precio: price,
      rating,
      stock
    };
  });

  return {
    productosPromo,
    totalInventarioGeneral
  };
};
