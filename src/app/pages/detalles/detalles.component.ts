import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataProductosService } from 'src/app/servicios/data-productos.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit{

  plantilla=[{
    "id":"",
    "codigo":"",
    "descripcion":"",
    "precioC":"",
    "precioV":"",
    "ganancia":"",
    "existencia":""
  }];

  id!:string;

  constructor(private route:ActivatedRoute, public datoProducto:DataProductosService){

  }

  ngOnInit():void{
    this.id = String(this.route.snapshot.paramMap.get("id"));
    this.filtrar(this.id)
  }

  filtrar(id:string){
    this.plantilla = this.datoProducto.datosProductos.filter(producto => producto.id === id)
  }
}
