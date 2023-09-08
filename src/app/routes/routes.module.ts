import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './components/inicio/inicio.component';
import { InstitucionalComponent } from './components/institucional/institucional.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    InicioComponent,
    InstitucionalComponent,
    ServiciosComponent,
    ContactoComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    InicioComponent,
    InstitucionalComponent,
    ServiciosComponent,
    ContactoComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class RoutesModule { }
