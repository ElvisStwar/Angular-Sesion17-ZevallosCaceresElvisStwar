import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos/productos.component';
import { DetallesComponent } from './detalles/detalles.component';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    ProductosComponent,
    DetallesComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [
    ProductosComponent,
    DetallesComponent
  ]
})
export class PagesModule { }
