import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';


import { AppComponent } from './app.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { InicioComponent } from './inicio/inicio.component';
import { DetallesComponent } from './detalles/detalles.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { MatGridListModule, MatProgressSpinnerModule, MatAutocompleteModule, MatFormFieldModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BuscadorComponent,
    InicioComponent,
    DetallesComponent
  ],
  exports: [
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatFormFieldModule,
    MatListModule,
    MatAutocompleteModule,
    MatGridListModule,
    MatInputModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatToolbarModule
    ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
