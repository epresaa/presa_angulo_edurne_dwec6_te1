import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdministrarComponent } from './administrar/administrar.component';
import { CrearComponent } from './crear/crear.component';
import { DirectorioComponent } from './directorio/directorio.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { HomeComponent } from './home/home.component';
import { LogeoComponent } from './logeo/logeo.component';
import { ModificarComponent } from './modificar/modificar.component';

const routes: Routes = [  
  { path: '', component: HomeComponent },
  { path: 'administrar', component: AdministrarComponent },
  { path: 'directorio', component: DirectorioComponent },
  { path: 'logeo', component: LogeoComponent },
  { path: 'crear', component: CrearComponent },
  { path: 'modificar/:id', component: ModificarComponent },
  { path: 'eliminar/:id', component: EliminarComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
