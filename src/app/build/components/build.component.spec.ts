import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BuildComponent } from './build.component';
import { TranslateModule } from '@ngx-translate/core';
import { BuildStatus } from '../model/build.model';

describe('BuildComponent', () => {
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
  }));

  it('should create the component', () => {
    const fixture = TestBed.createComponent(BuildComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it('should return in-progress class for IN_PROGRESS status', () => {
    const fixture = TestBed.createComponent(BuildComponent);
    const comp = fixture.componentInstance;
    comp.status = BuildStatus.IN_PROGRESS;
    expect(comp.classByStatus()).toBe('in-progress');
  });

  it('should return success class for SUCCESS status', () => {
    const fixture = TestBed.createComponent(BuildComponent);
    const comp = fixture.componentInstance;
    comp.status = BuildStatus.SUCCESS;
    expect(comp.classByStatus()).toBe('success');
  });

  it('should return failed class for FAILED status', () => {
    const fixture = TestBed.createComponent(BuildComponent);
    const comp = fixture.componentInstance;
    comp.status = BuildStatus.FAILED;
    expect(comp.classByStatus()).toBe('failed');
  });

  it('should return aborted class for ABORTED_WITH_SUCCESS status', () => {
    const fixture = TestBed.createComponent(BuildComponent);
    const comp = fixture.componentInstance;
    comp.status = BuildStatus.ABORTED_WITH_SUCCESS;
    expect(comp.classByStatus()).toBe('aborted');
  });

  it('should return aborted class for ABORTED_WITH_FAILURE status', () => {
    const fixture = TestBed.createComponent(BuildComponent);
    const comp = fixture.componentInstance;
    comp.status = BuildStatus.ABORTED_WITH_FAILURE;
    expect(comp.classByStatus()).toBe('aborted');
  });
});
