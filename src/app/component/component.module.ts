import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { MaterialModule } from '../material/material.module';
import { CarouselComponent } from './carousel/carousel.component';



@NgModule({
  declarations: [
    CardComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CardComponent
  ]
})
export class ComponentModule { }
