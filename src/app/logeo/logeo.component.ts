import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { AccesoDatosService } from '../services/acceso-datos.service';

@Component({
  selector: 'app-logeo',
  templateUrl: './logeo.component.html',
  styleUrl: './logeo.component.css',
  providers: [LocalStorageService, AccesoDatosService]
})
export class LogeoComponent implements OnInit {
  constructor(private localStorageService: LocalStorageService, private acccesoDatos: AccesoDatosService) {}

  ngOnInit(): void {
    this.cargarLocalStorage();
    this.mostrarDatos();

  }

  cargarLocalStorage( ) {
    this.localStorageService.setItem('A','B');
  }

  mostrarDatos() {
    console.log(this.acccesoDatos.getDatos());
    console.log('Hola');
  }

}