import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import { RouterExtensions } from '@nativescript/angular'

import { ProductosService, Producto } from '../services/productos.service'

@Component({
  standalone: false,
  selector: 'Productos',
  templateUrl: './productos.component.html',
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = []

  // Inyección de dependencias: ProductosService fue registrado a nivel global (providedIn: 'root')
  constructor(private productosService: ProductosService, private routerExtensions: RouterExtensions) {}

  ngOnInit(): void {
    this.productos = this.productosService.getProductos()
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

  verDetalle(producto: Producto): void {
    this.routerExtensions.navigate([`/productos/detalle/${producto.id}`])
  }
}
