import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { AppStateService } from '../shared/services/app-state.service';
import { Organization } from '../organizations/model/organization.model';
import { UserAppService } from './services/user-app.service';
import { UserAppListComponent } from './user-app-list.component';

describe('UserAppListComponent', () => {
  let fixture: ComponentFixture<UserAppListComponent>;
  let spy;
  let comp: UserAppListComponent;
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
        { provide: UserAppService, useClass: UserAppService },
        { provide: AppStateService, useClass: AppStateService }
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(UserAppListComponent);
    spy = spyOn(TestBed.inject(UserAppService), 'findByOrgSortDesc').and.callThrough();
    comp = fixture.componentInstance;
  }));

  it('should create the component', () => {
    expect(comp).toBeTruthy();
  });

  it('should call UserAppService.findByOrgSortDesc on init', () => {
    comp.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should call UserAppService.findByOrgSortDesc on organization change', () => {
    const appStateService = TestBed.inject(AppStateService);
    appStateService.setSelectedOrganization(new Organization({ name: 'x', slug: 'dummy'}));
    expect(spy).toHaveBeenCalled();
  });
});
