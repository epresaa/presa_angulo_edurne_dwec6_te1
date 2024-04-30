import { Component } from '@angular/core';
import { ConsultasApiService } from '../services/consultas-api.service';
import { Empleado } from '../models/Empleado';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrl: './crear.component.css'
})
export class CrearComponent {
  nuevoEmple: Empleado = new Empleado(0, '', '', '', '');
    
  constructor(private consultasapi: ConsultasApiService) {}


  crear() {
    this.consultasapi.crearUsuario(this.nuevoEmple).subscribe(
      result => {
        console.log('Usuario creado con éxito:', result);
        alert('Usuario creado con éxito.');
      },
      error => {
        console.error('Error al crear el usuario:', error);
        alert('Error al crear el usuario.');
      }
    );
  }
}
