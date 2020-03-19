import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BuildComponent } from './build.component';
import { TranslateModule } from '@ngx-translate/core';
import { BuildStatus } from '../model/build.model';

describe('BuildComponent', () => {
  let fixture: ComponentFixture<BuildComponent>;
  let comp: BuildComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot()
      ],
      declarations: [
        BuildComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(BuildComponent);
    comp = fixture.componentInstance;
  }));

  it('should create the component', () => {
    expect(comp).toBeTruthy();
  });

  it('should return in-progress class for IN_PROGRESS status', () => {
    comp.status = BuildStatus.IN_PROGRESS;
    expect(comp.classByStatus()).toBe('in-progress');
  });

  it('should return success class for SUCCESS status', () => {
    comp.status = BuildStatus.SUCCESS;
    expect(comp.classByStatus()).toBe('success');
  });

  it('should return failed class for FAILED status', () => {
    comp.status = BuildStatus.FAILED;
    expect(comp.classByStatus()).toBe('failed');
  });

  it('should return aborted class for ABORTED_WITH_SUCCESS status', () => {
    comp.status = BuildStatus.ABORTED_WITH_SUCCESS;
    expect(comp.classByStatus()).toBe('aborted');
  });

  it('should return aborted class for ABORTED_WITH_FAILURE status', () => {
    comp.status = BuildStatus.ABORTED_WITH_FAILURE;
    expect(comp.classByStatus()).toBe('aborted');
  });
});
