import { Component, OnInit } from '@angular/core';
import { Build } from './model/build.model';
import { BuildService } from './services/build.service';
import { FadeAnimation } from '../shared/animations/fade.animation';
import { AppStateService } from '../shared/services/app-state.service';

@Component({
  selector: 'bd-build-list',
  templateUrl: './build-list.component.html',
  styleUrls: ['./build-list.component.scss'],
  animations: [FadeAnimation]
})
export class BuildListComponent implements OnInit {

  public builds: Array<Build> = [];
  public loading = true;

  constructor(private buildService: BuildService, private appStateService: AppStateService) {
    this.appStateService.getSelectedOrganizationSubject().subscribe(org => this.find(org));
  }

  async ngOnInit() {
    this.find();
  }

  async find(org?) {
    this.loading = true;
    this.builds = await this.buildService.findByOrgSortDesc(org);
    this.loading = false;
  }

}
