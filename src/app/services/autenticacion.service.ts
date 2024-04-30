import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})

export class AutenticacionService {
  
  constructor(private localStorageService: LocalStorageService) { }

  // Devuelve true si el valor en LS es 'true', de lo contrario devuelve false
  autenticadoSi(): boolean {
    const valor = this.localStorageService.getValue("usuarioAutenticado");
    if (valor !== 'true') {
      console.log(valor);
      return false;
    }
    console.log(valor);
    return true; 
  }

  login(usuario: string, contrasena: string): boolean {
    for (let i = 1; ; i++) {
      const usuarioString = this.localStorageService.getItem(`usuario${i}`);
      if (usuarioString !== null) {
        const [, , , storedUser, storedPassword] = usuarioString.split(',');
        
        // Login correcto:
        if (storedUser.trim() === usuario && storedPassword.trim() === contrasena) {
          this.localStorageService.setItem('usuarioAutenticado', 'true');
          return true; // Usuario autenticado
        }
      } else {
        break; // No quedan usuarios
      }
    }
    return false; // Si no encontrado, usu/pwd incorrectos
  }

  logout() {
    this.localStorageService.setItem('usuarioAutenticado', 'false');
  }
  
}
