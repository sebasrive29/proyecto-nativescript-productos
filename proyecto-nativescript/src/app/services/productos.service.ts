import { Injectable } from '@angular/core'

export interface Producto {
  id: number
  nombre: string
  categoria: string
  precio: number
}

@Injectable({
  providedIn: 'root', // Nivel más alto de inyección: disponible en toda la app sin re-declarar el provider
})
export class ProductosService {
  private productos: Producto[] = [
    { id: 1, nombre: 'Bleu de Chanel', categoria: 'Perfume', precio: 1850 },
    { id: 2, nombre: 'Sauvage Dior', categoria: 'Perfume', precio: 1650 },
    { id: 3, nombre: 'Acqua di Gio', categoria: 'Perfume', precio: 1400 },
    { id: 4, nombre: 'Lente de contacto mensual', categoria: 'Óptica', precio: 950 },
    { id: 5, nombre: 'Solución multipropósito', categoria: 'Óptica', precio: 320 },
  ]

  getProductos(): Producto[] {
    return this.productos
  }

  getProductoPorId(id: number): Producto | undefined {
    return this.productos.find((p) => p.id === id)
  }
}
