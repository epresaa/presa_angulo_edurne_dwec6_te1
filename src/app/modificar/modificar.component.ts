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
  emple: Empleado = new Empleado(0,'','','','');
  id!: number;
  
  constructor(private route: ActivatedRoute, private consultasapi: ConsultasApiService) {}

  ngOnInit(): void {
    // Determinar id
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.id = +idParam;
    
      // Consulta
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

  modificar() {
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
