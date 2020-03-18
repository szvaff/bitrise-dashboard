import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { AppStateService } from '../shared/services/app-state.service';
import { Organization } from '../organizations/model/organization.model';
import { UserAppService } from './services/user-app.service';
import { UserAppListComponent } from './user-app-list.component';

let findByOrgSortDescCalled = false;
class MockUserAppService {
  findByOrgSortDesc() {
    findByOrgSortDescCalled = true;
  }
}

describe('UserAppListComponent', () => {
  findByOrgSortDescCalled = false;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot(),
        HttpClientModule
      ],
      declarations: [
        UserAppListComponent
      ],
      providers: [
        { provide: UserAppService, useClass: MockUserAppService },
        { provide: AppStateService, useClass: AppStateService }
      ]
    }).compileComponents();
  }));

  it('should create the component', () => {
    const fixture = TestBed.createComponent(UserAppListComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it('should call UserAppService.findByOrgSortDesc on init', () => {
    TestBed.inject(UserAppService);
    const fixture = TestBed.createComponent(UserAppListComponent);
    const comp = fixture.componentInstance;
    comp.ngOnInit();
    expect(findByOrgSortDescCalled).toBe(true);
  });

  it('should call BuildService.findByOrgSortDesc on organization change', () => {
    const appStateService = TestBed.inject(AppStateService);
    TestBed.inject(UserAppService);
    const fixture = TestBed.createComponent(UserAppListComponent);
    const comp = fixture.componentInstance;
    appStateService.setSelectedOrganization(new Organization({ name: 'x', slug: 'dummy'}));
    expect(findByOrgSortDescCalled).toBe(true);
  });
});
