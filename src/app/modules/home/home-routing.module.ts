import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {AddressInfoComponent} from './address-info/address-info.component';
import {ChildrenComponent} from './children/children.component';
import {AddressEditComponent} from './address-edit/address-edit.component';

const homeRoutes: Routes = [

];

@NgModule ({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [RouterModule]
})

export class HomeRoutingModule {

}
