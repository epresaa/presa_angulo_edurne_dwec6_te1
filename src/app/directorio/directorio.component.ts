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
  public empleados: Array<Empleado> = [];

  // Se pasa como parámetro la instancia única del servicio
  constructor(private _empleadosService: ConsultasApiService) {} 

  ngOnInit(): void {
    // Llamo a la consulta programada en el servicio
    this._empleadosService.getUsuarioParte1().subscribe(
      result => {
        result.data.forEach((usuario: any) => {
          let emple = new Empleado(usuario.id, usuario.email, usuario.first_name, usuario.last_name, usuario.avatar);
          this.empleados.push(emple);
        })
      },
      error => {
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
