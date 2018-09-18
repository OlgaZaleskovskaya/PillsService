import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {UserInfoService} from './shared/userInfo.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DataStorageService} from './shared/data-storage.service';
import { HttpClientModule} from '@angular/common/http';
import {AuthService} from './auth/auth.service';
import {AuthModule} from './auth/auth.module';
import {RecipeModule} from './recipe/recipe.module';
import {DoctorModule} from './doctor/doctor.module';
import {Form17Module} from './form17/form17.module';
import {MyHomeModule} from './myHome/myHome.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AuthModule,
    RecipeModule,
    DoctorModule,
    Form17Module,
    MyHomeModule
  ],
  providers: [
    UserInfoService,
    DataStorageService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
