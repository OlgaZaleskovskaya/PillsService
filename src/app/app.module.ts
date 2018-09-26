import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {UserInfoService} from './shared/userInfo.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DataStorageService} from './shared/data-storage.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthService} from './modules/auth/auth.service';
import {AuthModule} from './modules/auth/auth.module';
import {RecipeModule} from './modules/recipe/recipe.module';
import {DoctorModule} from './modules/doctor/doctor.module';
import {Form17Module} from './modules/form17/form17.module';
import { LoadingPageComponent } from './loading-page/loading-page.component';
import {LinkHighlightDirective} from './directive/link-hightlight.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AuthGuardService} from './auth-guard.service';
import {AuthInterceptor} from './shared/auth.interceptor';
import {PillsModule} from './modules/pills/pills.module';
import {HomeModule} from './modules/home/home.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoadingPageComponent,
    LinkHighlightDirective,
    PageNotFoundComponent,
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
    PillsModule,
    HomeModule

  ],
  providers: [
    UserInfoService,
    DataStorageService,
    AuthService,
    AuthGuardService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
