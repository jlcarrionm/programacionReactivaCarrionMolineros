import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ResolveEnd } from '@angular/router';

import { Alumnos } from 'src/app/models/alumnos';
import { EditarAlumnosDialogComponent } from '../editar-alumnos-dialog/editar-alumnos-dialog.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  alumnoSeleccionado!: Alumnos;

  alumnos: Alumnos[] = [
    {
      nombre: 'Jose',
      apellido: 'Carrion',
      email: 'jlcarrion90@gmail.com',
      ci: '0927509118',
      domicilio: 'Guayaquil',
      telefono: '042344710',
     /*  cursos: {
        nombre: 'Angular',
        comision: '49533',
        profesor: {
          nombre: 'Luis',
          apellido: 'Molineros',
          correo: 'Luisr@gmail.com'
      },
      fechaInicio: new Date(2023, 0, 1, 20, 30, 0),
      fechaFin: new Date(2023, 0, 31, 20, 30, 0),
      inscripcionAbierta: true
      }, */
    },
    {
      nombre: 'Luciana',
      apellido: 'Aldas',
      email: 'lualdas@gmail.com',
      ci: '0927509999',
      domicilio: 'Ambato',
      telefono: '042344711',
      /* cursos: {
        nombre: 'Ionic',
        comision: '49999',
        profesor: {
          nombre: 'Francisco',
          apellido: 'Gallo',
          correo: 'Fgallo@gmail.com'
      },
      fechaInicio: new Date(2023, 0, 1, 20, 30, 0),
      fechaFin: new Date(2023, 0, 31, 20, 30, 0),
      inscripcionAbierta: true
      }, */
    },
    {
      nombre: 'Sara',
      apellido: 'Ushina',
      email: 'sara@gmail.com',
      ci: '2315486987',
      domicilio: 'Guayaquil',
      telefono: '042458796',
     /*  cursos: {
        nombre: 'SQL',
        comision: '50000',
        profesor: {
          nombre: 'Omar',
          apellido: 'Rodrigueaz',
          correo: 'orodriguez@gmail.com'
      },
      fechaInicio: new Date(2023, 0, 1, 20, 30, 0),
      fechaFin: new Date(2023, 0, 31, 20, 30, 0),
      inscripcionAbierta: true
      }, */
    }
  ]
  dataSource: MatTableDataSource<Alumnos> = new MatTableDataSource<Alumnos>(this.alumnos);
  columnas: string[] = ['nombre', 'apellido', 'email', 'ci', 'domicilio', 'telefono', 'acciones'];

  constructor(
    public dialog: MatDialog
  ){

  }

  abrirModal(alumno: any){
    this.alumnoSeleccionado = this.alumnos[this.alumnos.findIndex((alumnoActual) => alumnoActual.ci === alumno.ci)];
    console.log("Alumno", this.alumnoSeleccionado)
    const dialogRef = this.dialog.open(EditarAlumnosDialogComponent, {
      data: alumno
    });


    dialogRef.afterClosed().subscribe(result => {
     // console.log("AlumnoActulizado", result);
     // console.log("AlumnoActulizadoSeleccionado", this.alumnoSeleccionado);

    //  this.alumnos[this.alumnos.findIndex((alumnoActual) => alumnoActual.ci === this.alumnoSeleccionado.ci)] = result;
    // console.log("AlumnoActulizado", this.alumnos);
this.alumnos = this.alumnos.map((alumnoActual: Alumnos) =>{
  if(alumnoActual.ci === result.ci){
console.log('Result',result.mode)

    delete result.mode;

    console.log('Result',result.mode)

    return alumnoActual = result
  }else{
    return alumnoActual
  }
})
this.dataSource = new MatTableDataSource<Alumnos>(this.alumnos)
    })
  }

 /*  actualizarAlumnoPadre(alumno: Alumnos){
    this.alumnos[this.alumnos.findIndex((alumnoActual) => alumnoActual.ci === this.alumnoSeleccionado.ci)] = alumno;
    console.log("AlumnoActulizado", alumno);


  } *//*  */




  eliminarRegistro(ci: any){

    console.log("cedula", ci)

   this.alumnos.splice( this.alumnos.findIndex((alumnoActual) => alumnoActual.ci === ci),1)

    console.log("Delete", this.alumnos)

    this.dataSource = new MatTableDataSource<Alumnos>(this.alumnos)

  }

}
