import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OrganizationService } from 'src/app/organizations/services/organization.service';
import { AppStateService } from '../services/app-state.service';

@Component({
  selector: 'bd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  title = 'Bitrise Dashboard';
  organizations = [];
  selectedOrg = null;

  constructor(private organizationService: OrganizationService, private appStateService: AppStateService) {}

  async ngOnInit() {
    this.organizations = await this.organizationService.findAll();
  }

  onOrgSelect() {
    this.appStateService.setSelectedOrganization(this.selectedOrg);
  }
}
