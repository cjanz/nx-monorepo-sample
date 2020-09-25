import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SharedComponentsModule } from '@ng-cli-app/shared/components';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from '@ng-cli-app/auth';

describe('AppComponent', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          NoopAnimationsModule,
          SharedComponentsModule,
        ],
        declarations: [AppComponent],
        providers: [
          {
            provide: AuthService,
            useValue: {},
          },
        ],
      }).compileComponents();
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
