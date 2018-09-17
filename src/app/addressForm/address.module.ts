import {NgModule} from '@angular/core';
import {AddressesComponent} from './addresses/addresses.component';
import {AddressesEditComponent} from './addresses-edit/addresses-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    AddressesComponent,
    AddressesEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
})
export class AddressModule {

}
