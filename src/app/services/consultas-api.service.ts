import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// Servicio ConsultasApiService
// Métodos del CRUD para realizar consultas a la API 'reqres.in'
export class ConsultasApiService {
  // Atributos
  public url: string; 

  // Constructor: recibe como parámetro HttpClient
  constructor(public _http: HttpClient) { 
    this.url = '';
  }

  // Métodos del CRUD
  // GET: usuarios página 1 y página 2 (NOTA: reqres solo permite hacerlo así, en 2 operaciones)
  getUsuarioParte1(): Observable<any> {
    this.url = "https://reqres.in/api/users?page=1";
    return this._http.get(this.url);
  }
  getUsuarioParte2(): Observable<any> {
    this.url = "https://reqres.in/api/users?page=2";
    return this._http.get(this.url);
  }

  // GET: usuario por id
  getUsuarioPorId(id: number): Observable <any> {
    this.url = `https://reqres.in/api/users/${id}`;   // NOTA: Solo funciona con comillas inversas
    return this._http.get(this.url);
  }

  // POST
  crearUsuario(datos: any): Observable <any> {
    return this._http.post("https://reqres.in/api/users", datos);
  }

  // PUT
  modificarUsuario(id: number, datos: any): Observable <any> {
    return this._http.put("https://reqres.in/api/users/" + id, datos);
  }

  // DELETE
  eliminarUsuario(id: number): Observable <any> {
    return this._http.delete("https://reqres.in/api/users/" + id);
  }
}
