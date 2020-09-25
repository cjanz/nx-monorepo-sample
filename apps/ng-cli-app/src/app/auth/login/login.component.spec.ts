import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { LoginComponent } from './login.component';
import { AuthService } from '../auth.service';
import { SharedComponentsModule } from '@ng-cli-app/shared/components';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          NoopAnimationsModule,
          SharedComponentsModule,
          MatInputModule,
          MatButtonModule,
          ReactiveFormsModule,
          MatCardModule,
          MatIconModule,
        ],
        declarations: [LoginComponent],
        providers: [
          {
            provide: AuthService,
            useValue: jasmine.createSpyObj<AuthService>('AuthService', [
              'logout',
            ]),
          },
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
