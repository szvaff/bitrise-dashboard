import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { BuildListComponent } from './build-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BuildService } from './services/build.service';
import { AppStateService } from '../shared/services/app-state.service';
import { Organization } from '../organizations/model/organization.model';

describe('BuildListComponent', () => {
  let fixture: ComponentFixture<BuildListComponent>;
  let spy;
  let comp: BuildListComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot(),
        HttpClientModule
      ],
      declarations: [
        BuildListComponent
      ],
      providers: [
        { provide: BuildService, useClass: BuildService },
        { provide: AppStateService, useClass: AppStateService }
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(BuildListComponent);
    spy = spyOn(TestBed.inject(BuildService), 'findByOrgSortDesc').and.callThrough();
    comp = fixture.componentInstance;
  }));

  it('should create the component', () => {
    expect(comp).toBeTruthy();
  });

  it('should call BuildService.findByOrgSortDesc on init', () => {
    comp.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should call BuildService.findByOrgSortDesc on organization change', () => {
    const appStateService = TestBed.inject(AppStateService);
    appStateService.setSelectedOrganization(new Organization({ name: 'x', slug: 'dummy'}));
    expect(spy).toHaveBeenCalled();
  });
});
