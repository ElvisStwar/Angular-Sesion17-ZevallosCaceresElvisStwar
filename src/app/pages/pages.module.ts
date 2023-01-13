import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos/productos.component';
import { DetallesComponent } from './detalles/detalles.component';



@NgModule({
  declarations: [
    ProductosComponent,
    DetallesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
