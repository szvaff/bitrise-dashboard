import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { SpinnerComponent } from './spinner.component';

describe('SpinnerComponent', () => {
  let fixture: ComponentFixture<SpinnerComponent>;
  let comp: SpinnerComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot()
      ],
      declarations: [
        SpinnerComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(SpinnerComponent);
    comp = fixture.componentInstance;
  }));

  it('should create the component', () => {
    expect(comp).toBeTruthy();
  });
});
