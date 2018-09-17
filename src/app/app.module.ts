import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ChildrenComponent } from './children/children.component';
import {AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { RecipesComponent } from './recipes/recipes.component';
import { TestComponent } from './test/test.component';
import {UserInfoService} from './shared/userInfo.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DataStorageService} from './shared/data-storage.service';
import { HttpClientModule} from '@angular/common/http';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import {AuthService} from './auth/auth.service';
import {AddressModule} from './addressForm/address.module';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChildrenComponent,
    HomeComponent,
    RecipesComponent,
    TestComponent,
    SignupComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AddressModule,
    FormsModule
  ],
  providers: [
    UserInfoService,
    DataStorageService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
