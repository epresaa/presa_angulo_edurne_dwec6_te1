import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})

// Servicio AutenticacionService
// Métodos para gestionar la autenticación de usuarios
export class AutenticacionService {
  
  // Constructor: recibe como parámetro la instancia única del servicio de LocalStorage 
  constructor(private localStorageService: LocalStorageService) { }

  // Método autenticadoSi
  // Devuelve true si el valor en LocalStorage es 'true', de lo contrario devuelve false
  autenticadoSi(): boolean {
    const valor = this.localStorageService.getValue("usuarioAutenticado");
    if (valor !== 'true') {
      console.log(valor);
      return false;
    }
    console.log(valor);
    return true; 
  }

  // Método login: compara el usuario/contraseá introducidos con los almacenados 
  // Si el usuario es válido permite el login: el usuario puede acceder a las páginas guardadas por la clase AuthGuard
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

  // Método logout: modifica el valor de usuarioAutenticado 
  // Así el usuario pierde acceso a las páginas guardadas por la clase AuthGuard
  logout() {
    this.localStorageService.setItem('usuarioAutenticado', 'false');
  }
  
}
