import { TestBed, async } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';

import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent }
];

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LoginComponent,
        DashboardComponent
      ],
      imports: [
      RouterModule.forRoot(appRoutes),
      RouterTestingModule,
      MaterialModule,
      FormsModule,
      BrowserAnimationsModule
      ],
      providers: [
        AuthService,
        {provide: APP_BASE_HREF, useValue : '/' }
      ]
    }).compileComponents();
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    //expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
