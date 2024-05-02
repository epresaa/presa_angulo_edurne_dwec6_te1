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
  // Atributos
  public empleados: Array<Empleado> = [];

  // Constructor: Se pasa como parámetro la instancia única del servicio usado
  constructor(private _empleadosService: ConsultasApiService, private router: Router) {} 

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

  // Métodos de los botones
  // Modificar: redirecciona a la ruta modificar
  modificarEmpleado(id: number): void {
    this.router.navigate(['/modificar', id]);
  }

  // Eliminar: redirecciona a la ruta eliminar
  eliminarEmpleado(id: number): void {
    this.router.navigate(['/eliminar', id]);
  }
}
