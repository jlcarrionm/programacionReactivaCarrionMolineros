import { Injectable, Pipe } from '@angular/core';
import { BehaviorSubject, filter, from, map, Observable, of, Subject } from 'rxjs';
import { Cursos } from '../models/cursos';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private cursos: Cursos[] = [
    {
      nombre: 'Angular',
      comision: '49533',
      profesor: {
        nombre: 'Kleber',
        apellido:'Ruiz',
        correo: 'kruiz@aifasa.com'

      },
      fechaInicio: new Date(2023, 0, 1, 20, 30, 0),
      fechaFin: new Date(2023, 0, 31, 20, 30, 0),
      inscripcionAbierta: true
    },
    {
      nombre: 'Vue',
      comision: '42523',
      profesor: {
        nombre: 'Omar',
        apellido:'Rpdriguez',
        correo: 'orodriguez@aifasa.com'
      },
      fechaInicio: new Date(2023, 1, 1, 20, 30, 0),
      fechaFin: new Date(2023, 1, 31, 20, 30, 0),
      inscripcionAbierta: false
    },
    {
      nombre: 'NodeJS',
      comision: '42433',
      profesor: {
        nombre: 'Cris',
        apellido:'Hurtado',
        correo: 'tristan@gmail.com'
    },
      fechaInicio: new Date(2023, 2, 1, 20, 30, 0),
      fechaFin: new Date(2023, 2, 31, 20, 30, 0),
      inscripcionAbierta: true
    },
    {
      nombre: 'VS',
      comision: '505051',
      profesor: {
        nombre: 'Abigail',
        apellido:'Aldas',
        correo: 'abi@gmail.com'
    },
      fechaInicio: new Date(2023, 2, 1, 20, 30, 0),
      fechaFin: new Date(2023, 2, 31, 20, 30, 0),
      inscripcionAbierta: true
    },
  ];
  private cursos$!: BehaviorSubject<Cursos[]>;
  constructor(
  ) {
    this.cursos$ = new BehaviorSubject(this.cursos);
  }
  obtenerCursosPromise(): Promise<Cursos[]>{
    return new Promise((resolve, reject) => {
      if(this.cursos.length > 0){
        resolve(this.cursos);
      }else{
        reject([]);
      }
    });
   }
   obtenerCursosObservable$(): Observable<Cursos[]>{

    return this.cursos$.asObservable();
  }

  obtenerCurso(cursoVariable: string): Promise<Cursos[]>{
    return new Promise((resolve, reject) => {
      if(this.cursos.length > 0){
       /*  resolve(this.cursos.filter(x => x.comision == curso));
        this.cursos$.next(this.cursos.filter(x => x.comision == curso)); */
        of(this.cursos).pipe(
          map((cursos: Cursos[]) => {
            return cursos.filter((curso: Cursos) => curso.comision === cursoVariable)
          })
        ).subscribe((cursos)=>{
          console.log("Obtenido desde el OF, filtrado por comision", cursos);
          resolve(cursos);
          this.cursos$.next(cursos);
        })

      }else{
        reject([]);
      }

    });
  }

}
