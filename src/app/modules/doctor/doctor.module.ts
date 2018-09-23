import {NgModule} from '@angular/core';
import {DoctorComponent} from './doctor/doctor.component';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    DoctorComponent,
  ],
  imports: [
   CommonModule,
  ]
})
export  class DoctorModule {

}
