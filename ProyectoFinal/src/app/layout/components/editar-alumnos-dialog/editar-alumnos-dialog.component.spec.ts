import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAlumnosDialogComponent } from './editar-alumnos-dialog.component';

describe('EditarAlumnosDialogComponent', () => {
  let component: EditarAlumnosDialogComponent;
  let fixture: ComponentFixture<EditarAlumnosDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAlumnosDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarAlumnosDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
