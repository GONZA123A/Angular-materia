import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { MaterialModule } from '../material/material.module';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [
    CardComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CardComponent,
    TableComponent
  ]
})
export class ComponentModule { }
