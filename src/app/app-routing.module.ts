import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorComponent } from './buscador/buscador.component';
import { DetallesComponent } from './detalles/detalles.component';
import { InicioComponent } from './inicio/inicio.component';



const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'detalles', component: DetallesComponent },
  { path: 'buscador', component: BuscadorComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {}
