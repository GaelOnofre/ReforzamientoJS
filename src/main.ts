import { 
  obtenerProductos, 
  obtenerCandidatosPromo, 
  calcularValorInventario, 
  generarReporteDescuentos, 
  contarPorCategoria 
} from './services/ProductService';

const ejecutar = async () => {
  const productos = await obtenerProductos();

 
  console.log('=== PRODUCTOS CANDIDATOS PARA PROMOCIÓN ===');
  const candidatos = obtenerCandidatosPromo(productos);
  candidatos.forEach(({ nombre, precio, rating, stock }) => {
    console.log(
      `Producto: ${nombre}
       Precio: $${precio} 
       Rating: ${rating} 
       Stock: ${stock}`
    );
  });
  console.log(candidatos);

  
  console.log('\n=== VALOR TOTAL DEL INVENTARIO ===');
  const totalInventario = calcularValorInventario(productos);
  console.log(`Valor total del inventario: $${totalInventario.toFixed(2)}`);

  
  console.log('\n=== REPORTE DE PRECIOS CON DESCUENTO ===');
  const reporteDescuento = generarReporteDescuentos(productos);
  console.table(reporteDescuento);

  
  console.log('\n=== PRODUCTOS POR CATEGORÍA ===');
  const categorias = contarPorCategoria(productos);
  console.log(categorias);
};

ejecutar();