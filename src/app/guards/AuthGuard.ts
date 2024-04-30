import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private localStorageService: LocalStorageService) {}

  canActivate(): boolean {
    // Verificar si el usuario está autenticado
    const usuarioAutenticado = this.localStorageService.getItem('usuarioAutenticado');
    if (usuarioAutenticado === 'true') {
      return true; // Permitir la activación de la ruta
    } else {
      // Usuario no autenticado, redirigir al componente de inicio de sesión
      this.router.navigate(['/logeo']);
      return false; // Evitar la activación de la ruta
    }
  }
}