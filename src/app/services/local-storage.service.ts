import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  // Introducir valores
  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  // Recoger clave
  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  // Recoger valor de clave
  getValue(key: string): string {
    const item = localStorage.getItem(key);
    return item !== null ? JSON.parse(item) : null;
  }
}
