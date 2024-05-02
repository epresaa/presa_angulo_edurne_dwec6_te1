import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// Servicio AccesoDatosService
// Métodos para obtener los datos de los usuarios válidos desde el fichero usuarios.csv 
export class AccesoDatosService {
  public data = '../assets/usuarios.csv';

  // Constructor: recibe como parámetro una instancia de HttpClient
  constructor(private httpclient: HttpClient) { }

  // Método getDatos: obtiene los datos del fichero csv y los devuelve en formato texto
  getDatos() {
    return this.httpclient.get(this.data, {responseType: 'text'});
  }
}