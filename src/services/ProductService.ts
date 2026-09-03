import type { 
  ApiResponse, 
  Product, 
  ProductoPromo, 
  ProductoDescuento, 
  ResumenCategorias 
} from '../models/product';


export const obtenerProductos = async (): Promise<Product[]> => {
  const respuesta = await fetch('https://dummyjson.com/products');
  const datos: ApiResponse = await respuesta.json();
  return datos.products;
};


export const obtenerCandidatosPromo = (productos: Product[]): ProductoPromo[] => {
  return productos
    .filter(({ rating, stock }) => rating >= 4.5 && stock > 10)
    .map(({ title, price, rating, stock }) => ({
      nombre: title,
      precio: price,
      rating,
      stock
    }));
};


export const calcularValorInventario = (productos: Product[]): number => {
  return productos.reduce((total, { price, stock }) => total + (price * stock), 0);
};


export const generarReporteDescuentos = (productos: Product[]): ProductoDescuento[] => {
  return productos.map(({ title, price, discountPercentage }) => {
    const calculo = price - (price * discountPercentage / 100);
    return {
      title,
      originalPrice: price,
      discountPercentage,
      finalPrice: Number(calculo.toFixed(2))
    };
  });
};

export const contarPorCategoria = (productos: Product[]): ResumenCategorias => {
  return productos.reduce((acumulador: ResumenCategorias, { category }) => {
    acumulador[category] = (acumulador[category] || 0) + 1;
    return acumulador;
  }, {});
};