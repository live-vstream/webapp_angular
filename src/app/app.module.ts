import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CustomMaterialModule } from './custom-material/custom-material.module'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule.forRoot(),
    CustomMaterialModule
  ],
  providers: [ AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
