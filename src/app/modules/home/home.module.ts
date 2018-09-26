import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AddressInfoComponent} from './address-info/address-info.component';
import {ChildrenComponent} from './children/children.component';
import {AppRoutingModule} from '../../app-routing.module';
import {EditInfoComponent} from './edit-info/edit-info.component';






@NgModule({
  declarations: [
    HomeComponent,
    AddressInfoComponent,
    ChildrenComponent,
    EditInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ]
})
export  class HomeModule {

}
