import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SigninComponent} from './modules/auth/signin/signin.component';
import {SignupComponent} from './modules/auth/signup/signup.component';
import {DoctorComponent} from './modules/doctor/doctor/doctor.component';
import {RecipeComponent} from './modules/recipe/recipe/recipe.component';
import {Form17Component} from './modules/form17/form17/form17.component';
import {LoadingPageComponent} from './loading-page/loading-page.component';
import {AuthGuardService} from './auth-guard.service';


const appRoutes: Routes = [
    {path: '', component: LoadingPageComponent},
    {path: 'home', loadChildren: './modules/myHome/myHome.module#MyHomeModule'},
    {path: 'familyDoctor', canActivate: [AuthGuardService], component: DoctorComponent},
    {path: 'form17', canActivate: [AuthGuardService], component: Form17Component},
    {path: 'recipe', canActivate: [AuthGuardService], component: RecipeComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'signin', component: SigninComponent},
    {path: 'not-found', component: SigninComponent},
    {path: '**', redirectTo: '/not-found'},
  ]
;

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
