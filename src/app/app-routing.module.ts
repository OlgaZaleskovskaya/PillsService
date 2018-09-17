import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {AddressesComponent} from './addressForm/addresses/addresses.component';
import {ChildrenComponent} from './children/children.component';
import {HomeComponent} from './home/home.component';
import {RecipesComponent} from './recipes/recipes.component';
import {TestComponent} from './test/test.component';
import {AddressesEditComponent} from './addressForm/addresses-edit/addresses-edit.component';
import { SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';

const appRoutes: Routes = [
  {path: '', component: HeaderComponent},
  {path: 'header', component: HeaderComponent, children: [
      { path: 'home', component: HomeComponent, children: [
          {path: 'address', component: AddressesComponent},
          {path: 'address/edit', component: AddressesEditComponent},
          {path: 'children', component: ChildrenComponent},
        ] },
      {path: 'recipes', component: RecipesComponent},
      {path: 'test', component: TestComponent},
      {path: 'signup', component: SignupComponent},
      {path: 'signin', component: SigninComponent},
    ]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
