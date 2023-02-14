import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, takeUntil, Subject, from, map } from 'rxjs';
import { CursoService } from 'src/app/services/curso.service';
import { Cursos } from '../../../models/cursos';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit, OnDestroy{
  cursos!: Cursos[];
  cursos$!: Observable<Cursos[]>;
  suscripcion!: Subscription;
  numberCurso!: number;
  private destroy$ = new Subject<any>();
  comision: string = '';
  profesor: string = '';
/*   srcObject = from(this.cursos
    ); */

  constructor(
    private cursoService: CursoService
  ){}

  ngOnInit() {
    this.cursos$ = this.cursoService.obtenerCursosObservable$();

    this.suscripcion = this.cursos$
      .pipe(takeUntil(this.destroy$))
      .subscribe(cursos => this.cursos = cursos);

    this.numberCurso = this.cursos.length;

   /*  this.srcObject
    .pipe(map(data => { return data.profesor.nombre + ' ' + data.profesor.apellido }))
  .subscribe(data => { console.log('data',data) }) */

    }


  busqueda(){
    this.cursoService.obtenerCurso(this.comision).then((cursosObtenidos: Cursos[]) =>
    console.log('CUrsoObtenido', cursosObtenidos))

   }

  ngOnDestroy(): void{

    this.suscripcion.unsubscribe();
    this.destroy$.next({});
    this.destroy$.complete();

  }
}
