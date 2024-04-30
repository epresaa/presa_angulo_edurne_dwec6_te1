import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AccesoDatosService {
  public data = '../assets/usuarios.csv';

  constructor(private httpclient: HttpClient) { }

  getDatos() {
    return this.httpclient.get(this.data, {responseType: 'text'});
  }
}