import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    CommonModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    CommonModule
  ]
})
export class SharedModule {}
