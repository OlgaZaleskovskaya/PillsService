import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SigninComponent} from './auth/signin/signin.component';
import {SignupComponent} from './auth/signup/signup.component';
import {DoctorComponent} from './doctor/doctor/doctor.component';
import {RecipeComponent} from './recipe/recipe/recipe.component';
import {Form17Component} from './form17/form17/form17.component';
import {LoadingPageComponent} from './loading-page/loading-page.component';
import {MyHomeModule} from './myHome/myHome.module';


const appRoutes: Routes = [
    {path: '', component: LoadingPageComponent},
  {path: 'home', loadChildren: './myHome/myHome.module#MyHomeModule'},
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
