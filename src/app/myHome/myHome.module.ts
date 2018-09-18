import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {ChildrenComponent} from './children/children.component';
import {HomeRoutingModule} from './home-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AddressesComponent} from './addresses/addresses.component';
import {AddressesEditComponent} from './addresses-edit/addresses-edit.component';


@NgModule({
  declarations: [
    HomeComponent,
    AddressesComponent,
    AddressesEditComponent,
    ChildrenComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MyHomeModule {
}
