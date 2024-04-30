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

  // Recoger valores
  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }
}
