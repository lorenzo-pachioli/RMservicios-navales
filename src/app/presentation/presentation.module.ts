import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortadaComponent } from './components/portada/portada.component';
import { ObjetivosComponent } from './components/objetivos/objetivos.component';
import { MisionVisionComponent } from './components/mision-vision/mision-vision.component';
import { CertificacionesComponent } from './components/certificaciones/certificaciones.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ListadoBuquesComponent } from './components/listado-buques/listado-buques.component';
import { ListadoPersonalComponent } from './components/listado-personal/listado-personal.component';
import { ProvedoresComponent } from './components/provedores/provedores.component';
import { ListadoServiciosComponent } from './components/listado-servicios/listado-servicios.component';
import { TrabajosDestacadosComponent } from './components/trabajos-destacados/trabajos-destacados.component';
import { MotoresReparamosComponent } from './components/motores-reparamos/motores-reparamos.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { FormularioContactoComponent } from './components/formulario-contacto/formulario-contacto.component';
import { InfoContactoComponent } from './components/info-contacto/info-contacto.component';
import { MaterialModule } from '../material/material.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PortadaComponent,
    ObjetivosComponent,
    MisionVisionComponent,
    CertificacionesComponent,
    ClientesComponent,
    ListadoBuquesComponent,
    ListadoPersonalComponent,
    ProvedoresComponent,
    ListadoServiciosComponent,
    TrabajosDestacadosComponent,
    MotoresReparamosComponent,
    MapaComponent,
    FormularioContactoComponent,
    InfoContactoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LeafletModule,
    ReactiveFormsModule
  ],
  exports: [
    ObjetivosComponent,
    MisionVisionComponent,
    ListadoServiciosComponent,
    TrabajosDestacadosComponent,
    MapaComponent,
    InfoContactoComponent
  ]
})
export class PresentationModule { }
