import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministrarComponent } from './administrar/administrar.component';
import { CrearComponent } from './crear/crear.component';
import { DirectorioComponent } from './directorio/directorio.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LogeoComponent } from './logeo/logeo.component';
import { ModificarComponent } from './modificar/modificar.component';


@NgModule({
  declarations: [
    AppComponent,
    AdministrarComponent,
    CrearComponent,
    DirectorioComponent,
    EliminarComponent,
    FooterComponent,
    HomeComponent,
    LogeoComponent,
    ModificarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
