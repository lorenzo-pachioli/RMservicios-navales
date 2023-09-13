import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatRippleModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatRippleModule,
    MatCardModule,
    MatIconModule
  ]
})
export class MaterialModule { }
