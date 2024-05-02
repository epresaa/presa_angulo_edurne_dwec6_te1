import { Component } from '@angular/core';
import { ConsultasApiService } from '../services/consultas-api.service';
import { Empleado } from '../models/Empleado';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrl: './crear.component.css'
})

export class CrearComponent {
  // Atributos
  public nuevoEmple: Empleado = new Empleado(0, '', '', '', '');
    
  // Constructor: se pasa como parámetro la instancia única del servicio usado
  constructor(private consultasapi: ConsultasApiService) {}

  // Método crear
  // Llama a consultas de POST: introducir nuevo usuario
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
