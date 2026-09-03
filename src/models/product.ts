export interface Product {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  category: string;
}

export interface ApiResponse {
  products: Product[];
}

// Sección A: Promociones
export interface ProductoPromo {
  nombre: string;
  precio: number;
  rating: number;
  stock: number;
}

// Sección C: Reporte con descuento
export interface ProductoDescuento {
  title: string;
  originalPrice: number;
  discountPercentage: number;
  finalPrice: number;
}

// Sección D: Resumen por categoría
export interface ResumenCategorias {
  [categoria: string]: number;
}