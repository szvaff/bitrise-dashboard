import { Component, OnInit } from '@angular/core';
import { FadeAnimation } from '../shared/animations/fade.animation';
import { AppService } from './services/app.service';

@Component({
  selector: 'bd-user-app-list',
  templateUrl: './user-app-list.component.html',
  styleUrls: ['./user-app-list.component.scss'],
  animations: [FadeAnimation]
})
export class UserAppListComponent implements OnInit {

  public apps: any[] = [];
  public loading = true;

  constructor(private appService: AppService) {}

  async ngOnInit() {
    this.apps = await this.appService.findAllSortDesc();
    this.loading = false;
  }

}
