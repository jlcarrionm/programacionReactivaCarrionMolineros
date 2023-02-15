import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, takeUntil, Subject, from, map, of, filter, mergeMap, interval } from 'rxjs';
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


  private myArrayOf$!: Observable<Cursos[]>;

/*   srcObject = from(this.cursos
    ); */

  constructor(
    private cursoService: CursoService
  ){

  }

  ngOnInit() {
    this.cursos$ = this.cursoService.obtenerCursosObservable$();

    this.suscripcion = this.cursos$
      .pipe(takeUntil(this.destroy$))
      .subscribe(cursos => this.cursos = cursos);

    this.numberCurso = this.cursos.length;

   /*  of(this.cursos).subscribe((cursos)=> {
      console.log('Obtenido desde el Of', cursos)
    }) */

   /*  from(this.cursos).subscribe((cursos)=> {
      console.log('Obtenido desde el From',cursos)
    })
 */

    //Pipe con filter
    from(this.cursos).pipe(
      filter((curso: Cursos) => curso.comision === '505051')
    ).subscribe((curso: Cursos) => console.log('cursoFilter',curso))

   //Pipe con Map
    of(this.cursos).pipe(
      map((cursos: Cursos[]) => {
        return cursos.filter((curso: Cursos) => curso.comision === '505051')
      })
    ).subscribe((cursos)=>{
      console.log("Obtenido desde el OF, filtrado por nombre", cursos);
    })

   /*  of(this.cursos).pipe(
      mergeMap((cursos: Cursos[]) => {
        return interval(1000).pipe(map((i => {
          return i + cursos[i].nombre
        })));
      })
    ).subscribe((datos) => console.log('Utilizando mergeMap', datos));
 */



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
