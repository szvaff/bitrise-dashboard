import { Component, Input } from '@angular/core';
import { BuildStatus } from '../model/build.model';

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
  @Input() public status: BuildStatus;

  public classByStatus(): string {
    switch (this.status) {
      case BuildStatus.IN_PROGRESS:
        return 'in-progress';
      case BuildStatus.SUCCESS:
        return 'success';
      case BuildStatus.FAILED:
        return 'failed';
      case BuildStatus.ABORTED_WITH_SUCCESS:
      case BuildStatus.ABORTED_WITH_FAILURE:
        return 'aborted';
    }
  }
}
