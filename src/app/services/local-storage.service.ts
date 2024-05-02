import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// Servicio LocalStorageService
// Métodos para gestionar el LocalStorage
export class LocalStorageService {

  constructor() { }

  // Método setItem: introducir pares clave-valor
  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  // Método getItem: obtener valores a partir de clave
  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  // Método getValue: obtener valores en formato JSON a partir de clave 
  getValue(key: string): string {
    const item = localStorage.getItem(key);
    return item !== null ? JSON.parse(item) : null;
  }
}
