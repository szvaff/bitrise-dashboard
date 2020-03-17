import { Component, OnInit } from '@angular/core';
import { Build } from './model/build.model';
import { BuildService } from './services/build.service';

@Component({
  selector: 'bd-build-list',
  templateUrl: './build-list.component.html',
  styleUrls: ['./build-list.component.scss']
})
export class BuildListComponent implements OnInit {

  public builds: any[] = [];
  public loading = true;

  constructor(private buildService: BuildService) {}

  async ngOnInit() {
    this.builds = await this.buildService.findAllSorted();
    this.loading = false;
  }

}
