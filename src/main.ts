import { calcularTotal, obtenerProm } from './services/ProductService';

const mostrarResultado = async () => {
  const productosPromo = await obtenerProm();

  productosPromo.forEach((producto) => {
    const { nombre, precio, rating, stock } = producto;
    console.log(
      `Producto: ${nombre}
       Precio: $${precio} 
       Rating: ${rating} 
       Stock: ${stock}`
    );
  });

  const valorTotal = calcularTotal(productosPromo);

  console.log(productosPromo);

  console.log(`Total: $${valorTotal.toFixed(2)}`);
};

mostrarResultado();