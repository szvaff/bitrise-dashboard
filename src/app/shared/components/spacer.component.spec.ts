import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { SpacerComponent } from './spacer.component';

describe('SpacerComponent', () => {
  let fixture: ComponentFixture<SpacerComponent>;
  let comp: SpacerComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot()
      ],
      declarations: [
        SpacerComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(SpacerComponent);
    comp = fixture.componentInstance;
  }));

  it('should create the component', () => {
    expect(comp).toBeTruthy();
  });
});
