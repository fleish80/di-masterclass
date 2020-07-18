import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child.component';
import { CardComponent } from './card.component';

@NgModule({
  declarations: [ChildComponent, CardComponent],
  exports: [ChildComponent, CardComponent],
  imports: [CommonModule],
})
export class SharedUiModule { }
