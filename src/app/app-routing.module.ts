import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SigninComponent} from './modules/auth/signin/signin.component';
import {SignupComponent} from './modules/auth/signup/signup.component';
import {DoctorComponent} from './modules/doctor/doctor/doctor.component';
import {RecipeComponent} from './modules/recipe/recipe/recipe.component';
import {Form17Component} from './modules/form17/form17/form17.component';
import {LoadingPageComponent} from './loading-page/loading-page.component';
import {AuthGuardService} from './auth-guard.service';
import {PillsComponent} from './modules/pills/pills/pills.component';
import {HomeComponent} from './modules/home/home.component';
import {AddressInfoComponent} from './modules/home/address-info/address-info.component';

import {ChildrenComponent} from './modules/home/children/children.component';
import {EditInfoComponent} from './modules/home/edit-info/edit-info.component';



const appRoutes: Routes = [
    {path: '', component: LoadingPageComponent},
  /*  {path: 'home', loadChildren: './modules/myHome/myHome.module#MyHomeModule'},
  {
 path: 'home', component: HomeComponent, children: [
     {path: '', component: AddressesComponent},
     {path: 'address', component: AddressesComponent},
      {path: 'address/edit', component: AddressesEditComponent},
      {path: 'children', component: ChildrenComponent},
    ]
},*/ {path: 'home', component: HomeComponent, children: [
      {path: 'addressInfo', component: AddressInfoComponent},
     {path: 'editInfo', component: EditInfoComponent},
      {path: 'children', component: ChildrenComponent},
    ] },
    {path: 'familyDoctor', canActivate: [AuthGuardService], component: DoctorComponent},
    {path: 'form17',  component: Form17Component},
    {path: 'recipe', canActivate: [AuthGuardService], component: RecipeComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'signin', component: SigninComponent},
    {path: 'pills', component: PillsComponent},
    {path: 'not-found', component: SigninComponent},
 {path: '**', redirectTo: '/not-found'},
  ]
;

@NgModule({
  imports: [
  /*  RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})*/
    RouterModule.forRoot(appRoutes, )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
