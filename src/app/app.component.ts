import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from './services/autenticacion.service';
import { LocalStorageService } from './services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [AutenticacionService]
})

export class AppComponent implements OnInit {
  // Atributos
  title = 'EPASA Consulting';

  // Constructor: recibe como parámetros un router y las instancias únicas de los 2 servicios usados
  constructor(private router: Router, public authService: AutenticacionService, public localStorage: LocalStorageService) {}
  
  // Método OnInit: 
  ngOnInit(): void {
    // Inicializa el valor usuarioAutenticado para futura autenticacion 
    this.localStorage.setItem('usuarioAutenticado', 'false');
  }

  // Método logout: llama al servicio de autenticación que contiene el método logout()
  // Después redirige a la página de inicio
  logout() {
    this.authService.logout(); 
    this.router.navigate(['/']);  
  }
}
