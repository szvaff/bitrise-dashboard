import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { Organization } from 'src/app/organizations/model/organization.model';
import { AppStateService } from '../services/app-state.service';
import { OrganizationService } from 'src/app/organizations/services/organization.service';

let selectedOrg = null;
let organizationServiceFindAllCalled = false;
class MockAppStateService {
  setSelectedOrganization(org: Organization) {
    selectedOrg = org;
  }
}

class MockOrganizationService {
  findAll() {
    organizationServiceFindAllCalled = true;
  }
}

describe('HeaderComponent', () => {
  beforeEach(async(() => {
    selectedOrg = null;
    organizationServiceFindAllCalled = false;
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot(),
        HttpClientModule
      ],
      declarations: [
        HeaderComponent
      ],
      providers: [
        { provide: AppStateService, useClass: MockAppStateService },
        { provide: OrganizationService, useClass: MockOrganizationService }
      ]
    }).compileComponents();
  }));

  it('should create the header', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it('should have as title Bitrise Dashboard', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const app = fixture.componentInstance;
    expect(app.title).toBe('Bitrise Dashboard');
  });

  it('should call OrganizationService.findAll on init', () => {
    TestBed.inject(OrganizationService);
    const fixture = TestBed.createComponent(HeaderComponent);
    const comp = fixture.componentInstance;
    comp.ngOnInit();
    expect(organizationServiceFindAllCalled).toBe(true);
  });

  it('should set the selected organization in AppStateService', () => {
    TestBed.inject(AppStateService);
    const fixture = TestBed.createComponent(HeaderComponent);
    const comp = fixture.componentInstance;
    comp.selectedOrg = new Organization({ slug: 'xx', name: 'yyy' });
    comp.onOrgSelect();
    expect(selectedOrg.slug).toBe('xx');
  });
});
