import { obtenerDatos } from './services/ProductService';

const mostrarResultado = async () => {
  const { productosPromo, totalInventarioGeneral } = await obtenerDatos();

  productosPromo.forEach((producto) => {
    const { nombre, precio, rating, stock } = producto;
    console.log(
      `Producto: ${nombre}
       Precio: $${precio} 
       Rating: ${rating} 
       Stock: ${stock}`
    );
  });

  console.log(productosPromo);

  console.log(`Total inventario general: $${totalInventarioGeneral.toFixed(2)}`);
};

mostrarResultado();