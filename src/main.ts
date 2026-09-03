import { obtenerPromociones } from './services/ProductService';

const mostrarResultado = async () => {
  const productosPromo = await obtenerPromociones();

  productosPromo.forEach((producto) => {
    const { nombre, precio, rating, stock } = producto;
    console.log(
      `Producto: ${nombre} | Precio: $${precio} | Rating: ${rating} | Stock: ${stock}`
    );
  });


  console.log(productosPromo);
};

mostrarResultado();