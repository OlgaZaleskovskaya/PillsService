import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AddressesComponent} from './myHome/addresses/addresses.component';
import {ChildrenComponent} from './myHome/children/children.component';
import {HomeComponent} from './myHome/home/home.component';
import {AddressesEditComponent} from './myHome/addresses-edit/addresses-edit.component';
import {SigninComponent} from './auth/signin/signin.component';
import {SignupComponent} from './auth/signup/signup.component';
import {DoctorComponent} from './doctor/doctor/doctor.component';
import {RecipeComponent} from './recipe/recipe/recipe.component';
import {Form17Component} from './form17/form17/form17.component';


const appRoutes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},

    {path: 'familyDoctor', component: DoctorComponent},
    {path: 'form17', component: Form17Component},
    {path: 'recipe', component: RecipeComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'signin', component: SigninComponent},
  ]
;

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
