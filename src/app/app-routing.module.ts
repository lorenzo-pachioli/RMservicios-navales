import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './routes/components/inicio/inicio.component';
import { InstitucionalComponent } from './routes/components/institucional/institucional.component';
import { ServiciosComponent } from './routes/components/servicios/servicios.component';
import { ContactoComponent } from './routes/components/contacto/contacto.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'institucional', component: InstitucionalComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'contacto', component: ContactoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
