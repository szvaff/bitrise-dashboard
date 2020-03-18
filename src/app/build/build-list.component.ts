import { Component, OnInit } from '@angular/core';
import { Build } from './model/build.model';
import { BuildService } from './services/build.service';
import { FadeAnimation } from '../shared/animations/fade.animation';

@Component({
  selector: 'bd-build-list',
  templateUrl: './build-list.component.html',
  styleUrls: ['./build-list.component.scss'],
  animations: [FadeAnimation]
})
export class BuildListComponent implements OnInit {

  public builds: any[] = [];
  public loading = true;

  constructor(private buildService: BuildService) {}

  async ngOnInit() {
    this.builds = await this.buildService.findAllSortDesc();
    this.loading = false;
  }

}
