import { Component } from '@angular/core';
import { DataProductosService } from 'src/app/servicios/data-productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  constructor(public dataServiceProductos:DataProductosService){

  }

}
