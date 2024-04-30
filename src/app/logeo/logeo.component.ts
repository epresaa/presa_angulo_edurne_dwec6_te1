import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { AccesoDatosService } from '../services/acceso-datos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logeo',
  templateUrl: './logeo.component.html',
  styleUrl: './logeo.component.css',
  providers: [LocalStorageService, AccesoDatosService]
})
export class LogeoComponent implements OnInit {
  usuario: string = '';
  contrasena: string = '';
  
  constructor(private router: Router, private localStorageService: LocalStorageService, private accesoDatos: AccesoDatosService) {}

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

//   login() {
//     // Obtener los datos del Local Storage
//     const datosLocalStorageString = this.localStorageService.getItem('datosCSV');
//     if (datosLocalStorageString !== null) { // Verificar si el valor no es nulo
//       const datosLS = JSON.parse(datosLocalStorageString);
      
//       // Verificar usu/pwd
//       const usuarioEncontrado = datosLS.find((linea: string) => {
//         const [, , , usuario, contrasena] = linea.split(',');
//         return usuario.trim() === this.usuario && contrasena.trim() === this.contrasena;
//       });

//       if (usuarioEncontrado) {
//         // Indicar AUTENTICADO en LocalStorage
//         this.localStorageService.setItem('usuarioAutenticado', 'true');
        
//         // Redirigir 
//         this.router.navigate(['/administrar']);

//       } else {
//         alert('Usuario o contraseña incorrectos');
//       }
//     } else {
//       console.error('Error');
//     }
//   }
// 
login() {
  // Variable para almacenar el usuario encontrado
  let usuarioEncontrado: any = null;

  // Iterar a través de las líneas del Local Storage
  for (let i = 1; ; i++) {
    const usuarioString = this.localStorageService.getItem(`usuario${i}`);
    if (usuarioString !== null) {
      const [, , , usuario, contrasena] = usuarioString.split(',');
      if (usuario.trim() === this.usuario && contrasena.trim() === this.contrasena) {
        usuarioEncontrado = { usuario, contrasena }; // Almacenar el usuario encontrado
        break; // Salir del bucle si se encuentra un usuario válido
      }
    } else {
      break; // Salir del bucle si no hay más usuarios almacenados
    }
  }

  if (usuarioEncontrado) {
    // Usuario autenticado, indicarlo en el Local Storage
    this.localStorageService.setItem('usuarioAutenticado', 'true');
    
    // Redirigir 
    this.router.navigate(['/administrar']);
  } else {
    alert('Usuario o contraseña incorrectos');
  }
}
}