import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { Organization } from 'src/app/organizations/model/organization.model';
import { AppStateService } from '../services/app-state.service';
import { OrganizationService } from 'src/app/organizations/services/organization.service';

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>;
  let setSelectedOrganizationSpy;
  let findAllSpy;
  let comp: HeaderComponent;
  beforeEach(async(() => {
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
        { provide: AppStateService, useClass: AppStateService },
        { provide: OrganizationService, useClass: OrganizationService }
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(HeaderComponent);
    setSelectedOrganizationSpy = spyOn(TestBed.inject(AppStateService), 'setSelectedOrganization').and.callThrough();
    findAllSpy = spyOn(TestBed.inject(OrganizationService), 'findAll').and.callThrough();
    comp = fixture.componentInstance;
  }));

  it('should create the header', () => {
    expect(comp).toBeTruthy();
  });

  it('should have as title Bitrise Dashboard', () => {
    expect(comp.title).toBe('Bitrise Dashboard');
  });

  it('should call OrganizationService.findAll on init', () => {
    comp.ngOnInit();
    expect(findAllSpy).toHaveBeenCalled();
  });

  it('should set the selected organization in AppStateService', () => {
    comp.selectedOrg = new Organization({ slug: 'xx', name: 'yyy' });
    comp.onOrgSelect();
    expect(setSelectedOrganizationSpy).toHaveBeenCalled();
  });
});
