import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ToolbarComponent } from './layout/components/toolbar/toolbar.component';

import { ContentComponent } from './layout/components/content/content.component';
import { ConcatenarNombreApellidoPipe } from './pipes/concatenar-nombre-apellido.pipe';
import { TamanoTitulosDirective } from './directives/tamano-titulos.directive';
import { EditarAlumnosDialogComponent } from './layout/components/editar-alumnos-dialog/editar-alumnos-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaCursosComponent } from './layout/components/lista-cursos/lista-cursos.component';

import { CursoService } from './services/curso.service';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ContentComponent,
    ConcatenarNombreApellidoPipe,
    TamanoTitulosDirective,
    EditarAlumnosDialogComponent,
    ListaCursosComponent

  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [
    CursoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
