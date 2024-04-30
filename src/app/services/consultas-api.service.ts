import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ConsultasApiService {
  public url: string; 

  constructor(public _http: HttpClient) { 
    this.url = '';
  }

  // GET: usuarios página 1 y página 2
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
    this.url = `https://reqres.in/api/users/${id}`;   // Solo funciona con comillas inversas!
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
