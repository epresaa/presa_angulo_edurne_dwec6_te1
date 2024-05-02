import { Component, OnInit } from '@angular/core';
import { Empleado } from '../models/Empleado';
import { ConsultasApiService } from '../services/consultas-api.service';

@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.component.html',
  styleUrl: './directorio.component.css',
  providers: [ConsultasApiService]
})

export class DirectorioComponent implements OnInit {
  // Atributos
  public empleados: Array<Empleado> = [];

  // Se pasa como parámetro la instancia única del servicio usado
  constructor(private _empleadosService: ConsultasApiService) {} 

  // Método OnInit
  ngOnInit(): void {
    // Llamada a consultas de GET: mostrar los empleados 
    this._empleadosService.getUsuarioParte1().subscribe(
      result => {
        result.data.forEach((usuario: any) => {
          let emple = new Empleado(usuario.id, usuario.email, usuario.first_name, usuario.last_name, usuario.avatar);
          this.empleados.push(emple);
        })
      },
      error => {
        console.log(<any>error);
      }
    );
    this._empleadosService.getUsuarioParte2().subscribe(
      result => {
        result.data.forEach((usuario: any) => {
          let emple = new Empleado(usuario.id, usuario.email, usuario.first_name, usuario.last_name, usuario.avatar);
          this.empleados.push(emple);
        })
      
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
