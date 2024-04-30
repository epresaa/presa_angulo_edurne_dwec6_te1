import { Component, OnInit } from '@angular/core';
import { Empleado } from '../models/Empleado';
import { Router } from '@angular/router';
import { ConsultasApiService } from '../services/consultas-api.service';

@Component({
  selector: 'app-administrar',
  templateUrl: './administrar.component.html',
  styleUrl: './administrar.component.css',
  providers: [ConsultasApiService]
})
export class AdministrarComponent implements OnInit {
  public empleados: Array<Empleado> = [];

  // Se pasa como parámetro la instancia única del servicio
  constructor(private _empleadosService: ConsultasApiService, private router: Router) {} 

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

  // Redireccion: modificar
  modificarEmpleado(id: number): void {
    this.router.navigate(['/modificar', id]);
  }

  // Redireccion: eliminar
  eliminarEmpleado(id: number): void {
    this.router.navigate(['/eliminar', id]);
  }
}
