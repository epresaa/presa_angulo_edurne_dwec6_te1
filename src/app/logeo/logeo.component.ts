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
  usuario: string = '';
  contrasena: string = '';
  
  constructor(private router: Router, private localStorageService: LocalStorageService, private accesoDatos: AccesoDatosService, private authService: AutenticacionService) {}

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

  login() {
    if (this.authService.login(this.usuario, this.contrasena)) {
      this.router.navigate(['/administrar']); // Redirigir si el inicio de sesión es exitoso
    } else {
      alert('Usuario o contraseña incorrectos'); // Mostrar mensaje de error si falla el inicio de sesión
    }
  }

  
}