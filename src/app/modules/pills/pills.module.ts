
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PillsComponent} from './pills/pills.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    PillsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class PillsModule {
}
