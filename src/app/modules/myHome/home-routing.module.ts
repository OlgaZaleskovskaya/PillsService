import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {AddressesEditComponent} from './addresses-edit/addresses-edit.component';
import {ChildrenComponent} from './children/children.component';
import {AddressesComponent} from './addresses/addresses.component';

const homeRoutes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      {path: 'address', component: AddressesComponent},
      {path: 'address/edit', component: AddressesEditComponent},
      {path: 'children', component: ChildrenComponent},
    ]
  },
  ]
;

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule {

}
