import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { isAndroid } from '@nativescript/core'

import { ProductosService, Producto } from '../services/productos.service'

@Component({
  standalone: false,
  selector: 'ProductoDetalle',
  templateUrl: './producto-detalle.component.html',
})
export class ProductoDetalleComponent implements OnInit {
  producto: Producto | undefined
  mensajePlataforma: string = ''

  constructor(private route: ActivatedRoute, private productosService: ProductosService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params['id'])
    this.producto = this.productosService.getProductoPorId(id)

    // Requisito 10: asignar un valor a una variable SOLO cuando se ejecuta en Android
    if (isAndroid) {
      this.mensajePlataforma = 'Disponible con pago contra entrega (solo Android)'
    }
  }
}
