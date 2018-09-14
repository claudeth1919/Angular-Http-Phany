import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorComponent } from './buscador/buscador.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  // { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  // { path: 'inicio', component: AppComponent },
 // { path: 'detail/:id', component: BuscadorComponent },
  { path: 'buscador', component: BuscadorComponent }
];


@NgModule({
  imports: [
    // CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule {}
