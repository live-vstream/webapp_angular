import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdInputModule, MdButtonModule, MdSnackBarModule, MdProgressSpinnerModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdInputModule,
    MdButtonModule,
    MdSnackBarModule,
    MdProgressSpinnerModule
  ],
  exports: [
    MdInputModule,
    MdButtonModule,
    MdSnackBarModule,
    MdProgressSpinnerModule
  ],
  declarations: []
})
export class CustomMaterialModule { }
