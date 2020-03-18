import { Component, OnInit } from '@angular/core';
import { FadeAnimation } from '../shared/animations/fade.animation';
import { UserAppService } from './services/user-app.service';
import { AppStateService } from '../shared/services/app-state.service';
import { UserApp } from './model/user-app.model';
import { Organization } from '../organizations/model/organization.model';

@Component({
  selector: 'bd-user-app-list',
  templateUrl: './user-app-list.component.html',
  styleUrls: ['./user-app-list.component.scss'],
  animations: [FadeAnimation]
})
export class UserAppListComponent implements OnInit {
  public apps: Array<UserApp> = [];
  public loading = true;

  constructor(private userAppService: UserAppService, private appStateService: AppStateService) {
    this.appStateService.getSelectedOrganizationSubject().subscribe((org: Organization) => this.find(org));
  }

  async ngOnInit() {
    await this.find();
  }

  async find(org?: Organization) {
    this.loading = true;
    this.apps = await this.userAppService.findByOrgSortDesc(org);
    this.loading = false;
  }
}
