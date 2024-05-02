import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { AccesoDatosService } from '../services/acceso-datos.service';
import { AutenticacionService } from '../services/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logeo',
  templateUrl: './logeo.component.html',
  styleUrl: './logeo.component.css',
  providers: [LocalStorageService, AccesoDatosService, AutenticacionService]
})

export class LogeoComponent implements OnInit {
  // Atributos
  usuario: string = '';
  contrasena: string = '';
  
  // Constructor: se pasan como parámetro el router y las 3 instancias únicas de los tres servicios usados
  constructor(private router: Router, private localStorageService: LocalStorageService, private accesoDatos: AccesoDatosService, private authService: AutenticacionService) {}

  // Métod OnInit
  ngOnInit(): void {
    // Llamada al método que carga el LocalStorage
    this.cargarDatosEnLocalStorage();
  }

  // Método cargarDatosEnLocalStorage: introduce los datos del fichero de usuarios admin en el LocalStorage
  cargarDatosEnLocalStorage() {
    // Servicio accesoDatos: obtener datos de fichero csv
    this.accesoDatos.getDatos().subscribe(
      data => {
        const lineas = data.split('\n'); // Dividir los datos en líneas

        // Servicio localStorage: insertar datos en LocalStorage
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

  // Método login: llamado al hacerc clic en 'Iniciar sesión'
  login() {
    // Servicio de autenticación
    // Autenticación correcta: redirige a administrar
    if (this.authService.login(this.usuario, this.contrasena)) {
      this.router.navigate(['/administrar']); 
    
    // Autenticación incorrecta: mensaje de error
    } else {
      alert('Usuario o contraseña incorrectos'); 
    }
  }

  
}