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
  constructor(private localStorageService: LocalStorageService, private accesoDatos: AccesoDatosService) {}

  ngOnInit(): void {
    this.cargarDatosEnLocalStorage();
  }

  cargarDatosEnLocalStorage() {
    this.accesoDatos.getDatos().subscribe(
      data => {
        const lineas = data.split('\n'); // Dividir los datos en líneas

        lineas.forEach((linea, index) => {
          const usuario = `usuario${index}`; 
          this.localStorageService.setItem(usuario, linea.trim()); // Guardar la línea en el Local Storage
        });

        console.log('Datos guardados en Local Storage correctamente');
      },
      error => {
        console.error('Error al cargar los datos:', error);
      }
    );
  }
}
