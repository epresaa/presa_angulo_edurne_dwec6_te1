import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})

// Clase AuthGuard: encargada de poner guardas en determinadas rutas
export class AuthGuard implements CanActivate {
  // Constructor: recive como parámetros las rutas y el servicio LocalStorage 
  constructor(private router: Router, private localStorageService: LocalStorageService) {}

  // Método canActivate: determina cuando se puede acceder a las rutas
  canActivate(): boolean {
    // Determinar si usuario está autenticado
    const usuarioAutenticado = this.localStorageService.getItem('usuarioAutenticado');
    
    // Autenticado: permitir acceso a ruta (activada)
    if (usuarioAutenticado === 'true') {
      return true; 
    
    // No autenticado: no permitir -> redirige a página de /logeo
    } else {
      this.router.navigate(['/logeo']);
      return false; 
    }
  }
}