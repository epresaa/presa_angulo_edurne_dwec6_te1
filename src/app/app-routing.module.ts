import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/AuthGuard';

import { AdministrarComponent } from './administrar/administrar.component';
import { CrearComponent } from './crear/crear.component';
import { DirectorioComponent } from './directorio/directorio.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { HomeComponent } from './home/home.component';
import { LogeoComponent } from './logeo/logeo.component';
import { ModificarComponent } from './modificar/modificar.component';
import { ServiciosComponent } from './servicios/servicios.component';

// Rutas reconocidas por la aplicación
  // Algunas rutas son solo accesibles tras el logeo: están protegidas por la clase AuthGuard
const routes: Routes = [  
  { path: '', component: HomeComponent },
  { path: 'administrar', component: AdministrarComponent, canActivate: [AuthGuard] }, // Ruta protegida por clase AuthGuard
  { path: 'directorio', component: DirectorioComponent },
  { path: 'logeo', component: LogeoComponent },
  { path: 'crear', component: CrearComponent, canActivate: [AuthGuard] },             // Ruta protegida por clase AuthGuard
  { path: 'modificar/:id', component: ModificarComponent, canActivate: [AuthGuard] }, // Ruta protegida por clase AuthGuard
  { path: 'eliminar/:id', component: EliminarComponent, canActivate: [AuthGuard] },   // Ruta protegida por clase AuthGuard
  { path: 'servicios', component: ServiciosComponent},
  { path: '**', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
