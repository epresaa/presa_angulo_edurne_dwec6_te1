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
    // Validación de campos
    if(!this.nuevoEmple.email || !this.nuevoEmple.nombre || !this.nuevoEmple.apellido) {
      alert('Debes cubrir todos los campos marcados como obligatorios');
      return;   // NO se realiza consulta
    }

    // Validación de email corporativo
    if(!this.nuevoEmple.email.endsWith('@reqres.in')) {
      alert('El email no es válido: ingresa el email corporativo @reqres.in');
      return;   // NO se realiza consulta
    }
    
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
