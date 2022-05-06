import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';


const  AngularMaterial=[MatDatepickerModule,MatNativeDateModule,MatFormFieldModule,MatInputModule];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularMaterial
  ],
  exports:[
    AngularMaterial
  ]
})
export class MaterialModule { }
