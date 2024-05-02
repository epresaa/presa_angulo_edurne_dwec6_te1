import { Component, OnInit } from '@angular/core';
import { Empleado } from '../models/Empleado';
import { ConsultasApiService } from '../services/consultas-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.css'
})

export class EliminarComponent implements OnInit {
  // Atributos
  emple: Empleado = new Empleado(0,'','','','');
  id!: number;

  // Constructor: se pasa como parámetro la instancia única del servicio usado
    // También un objeto ActivatedRoute: para obtener el id pasado por URL
  constructor(private consultasapi: ConsultasApiService, private route: ActivatedRoute) {}

  // Método OnInit: 
  ngOnInit(): void {
    // Determinar id pasado por URL
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

  // Método eliminar: botón eliminar
    // Llama a la consulta DELETE: se elimina el usuario
  eliminar() {
    let confirmar = window.confirm('¿Seguro que quieres eliminar el usuario?');
    if(confirmar) {
      this.consultasapi.eliminarUsuario(this.id).subscribe(
        resultado => {
          console.log('Usuario eliminado', resultado);
          alert('Usuario eliminado con éxito');
        },
        error => {
          console.log('Error al eliminar el usuario', error);
          alert('Error al eliminar el usuario');
        }
      );
    } else {
      console.log('Eliminación cancelada por usuario');
    }
  }
}
