import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { UserAppComponent } from './user-app.component';

describe('UserAppComponent', () => {
  let fixture: ComponentFixture<UserAppComponent>;
  let comp: UserAppComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot()
      ],
      declarations: [
        UserAppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(UserAppComponent);
    comp = fixture.componentInstance;
  }));

  it('should create the component', () => {
    expect(comp).toBeTruthy();
  });
});
