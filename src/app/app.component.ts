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
  title = 'BIRT Consulting';

  constructor(private router: Router, public authService: AutenticacionService, public localStorage: LocalStorageService) {}
  
  // Inicializar para autenticacion 
  ngOnInit(): void {

    // CAMBIADO PARA PRUEBAS"!!!!!!!!! -> poner false
    this.localStorage.setItem('usuarioAutenticado', 'true');
  }

  logout() {
    this.authService.logout(); 
    this.router.navigate(['/']);  // Sale a la página de inicio
  }

}
