import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataProductosService {

  datosProductos=[{
    "id":"1",
    "codigo":"1",
    "descripcion":"Galletas",
    "precioC":"10",
    "precioV":"15",
    "ganancia":"5",
    "existencia":"100.00"
  },
  {
    "id":"2",
    "codigo":"2",
    "descripcion":"Mermelada de fresa",
    "precioC":"65",
    "precioV":"80",
    "ganancia":"15",
    "existencia":"100.00"
  },
  {
    "id":"3",
    "codigo":"3",
    "descripcion":"Aceite",
    "precioC":"18",
    "precioV":"20",
    "ganancia":"2",
    "existencia":"100.00"
  },
  {
    "id":"4",
    "codigo":"4",
    "descripcion":"Palomita de maíz",
    "precioC":"12",
    "precioV":"15",
    "ganancia":"3",
    "existencia":"100.00"
  },
  {
    "id":"5",
    "codigo":"5",
    "descripcion":"Doritos",
    "precioC":"5",
    "precioV":"8",
    "ganancia":"3",
    "existencia":"100.00"
  }]


  constructor() { }
}
