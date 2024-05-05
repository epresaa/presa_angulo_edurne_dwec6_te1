import { Component, OnInit } from '@angular/core';
import { ConsultasApiService } from '../services/consultas-api.service';
import { ActivatedRoute } from '@angular/router';
import { Empleado } from '../models/Empleado';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrl: './modificar.component.css',
  providers: [ConsultasApiService]
})

export class ModificarComponent implements OnInit {
  // Atributo
  emple: Empleado = new Empleado(0,'','','','');
  id!: number;
  
  // Constructor: se pasa como parámetro la instancia única del servicio usado
    // También un objeto ActivatedRoute: para obtener el id pasado por URL
  constructor(private route: ActivatedRoute, private consultasapi: ConsultasApiService) {}

  // Método OnInit:
  ngOnInit(): void {
    // Determinar idpasado por URL
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.id = +idParam;
    
      // Llamada a consulta GET: se rellena formulario
      this.consultasapi.getUsuarioPorId(this.id).subscribe(
        result => {
          console.log(result);
          this.emple.idEmpleado = result.data.id;
          this.emple.email = result.data.email;
          this.emple.nombre = result.data.first_name;
          this.emple.apellido = result.data.last_name;
          this.emple.fotoperfil = result.data.avatar;

          console.log(this.emple);
        },
        error => {
          console.error('Error al obtener el usuario:', error);
        }
      );
    }
  }

  // Método modificar: botón modificar
    // Llama a la consulta PUT: se modifica el usuario
  modificar() {
    // Validación de campos
    if(!this.emple.email || !this.emple.nombre || !this.emple.apellido) {
      alert('Debes cubrir todos los campos marcados como obligatorios');
      return;   // NO se realiza consulta
    }

    // Validación de email corporativo
    if(!this.emple.email.endsWith('@reqres.in')) {
      alert('El email no es válido: ingresa el email corporativo @reqres.in');
      return;   // NO se realiza consulta
    }

    this.consultasapi.modificarUsuario(this.id, this.emple).subscribe(
      result => {
        console.log('Usuario modificado con éxito:', result);
        alert('Usuario modificado con éxito.');
      },
      error => {
        console.error('Error al modificar el usuario:', error);
        alert('Error al modificar el usuario.');
      }
    );
  }
}
