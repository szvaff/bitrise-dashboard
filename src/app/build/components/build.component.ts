import { Component, Input } from '@angular/core';

@Component({
  selector: 'bd-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.scss']
})
export class BuildComponent {
  @Input() public owner: string;
  @Input() public appTitle: string;
  @Input() public triggered: string;
  @Input() public buildNumber: string;
  @Input() public status: number; // 0 - in progress, 1 - successful, 2 - failed, 3,4 - aborted

  public classByStatus() {
    switch (this.status) {
      case 0:
        return 'in-progress';
      case 1:
        return 'success';
      case 2:
        return 'failed';
      case 3:
      case 4:
        return 'aborted';
    }
  }
}
