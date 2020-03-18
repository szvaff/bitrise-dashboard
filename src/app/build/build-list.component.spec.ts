import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { BuildListComponent } from './build-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BuildService } from './services/build.service';
import { AppStateService } from '../shared/services/app-state.service';
import { Organization } from '../organizations/model/organization.model';

let buildServiceFindByOrgSortDescCalled = false;
class MockBuildService {
  findByOrgSortDesc() {
    buildServiceFindByOrgSortDescCalled = true;
  }
}

describe('BuildListComponent', () => {
  buildServiceFindByOrgSortDescCalled = false;
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
        { provide: BuildService, useClass: MockBuildService },
        { provide: AppStateService, useClass: AppStateService }
      ]
    }).compileComponents();
  }));

  it('should create the component', () => {
    const fixture = TestBed.createComponent(BuildListComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it('should call BuildService.findByOrgSortDesc on init', () => {
    TestBed.inject(BuildService);
    const fixture = TestBed.createComponent(BuildListComponent);
    const comp = fixture.componentInstance;
    comp.ngOnInit();
    expect(buildServiceFindByOrgSortDescCalled).toBe(true);
  });

  it('should call BuildService.findByOrgSortDesc on organization change', () => {
    const appStateService = TestBed.inject(AppStateService);
    TestBed.inject(BuildService);
    const fixture = TestBed.createComponent(BuildListComponent);
    const comp = fixture.componentInstance;
    appStateService.setSelectedOrganization(new Organization({ name: 'x', slug: 'dummy'}));
    expect(buildServiceFindByOrgSortDescCalled).toBe(true);
  });
});
