import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { ProductosComponent } from './productos.component'
import { ProductoDetalleComponent } from './producto-detalle.component'

const routes: Routes = [
  { path: '', component: ProductosComponent },
  { path: 'detalle/:id', component: ProductoDetalleComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class ProductosRoutingModule {}
