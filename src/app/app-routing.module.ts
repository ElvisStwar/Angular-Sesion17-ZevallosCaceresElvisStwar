import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { DetallesComponent } from './pages/detalles/detalles.component';
import { ProductosComponent } from './pages/productos/productos.component';

const routes: Routes = [

  {path:"", component:ProductosComponent},
  {path:"productos", component:ProductosComponent},
  {path:"detalles/:id", component:DetallesComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
