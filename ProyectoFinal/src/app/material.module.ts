import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';

import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule

  ],
  exports:[
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule
  ]

})
export class MaterialModule { }
