import { Component } from '@angular/core';

@Component({
  selector: 'bd-spinner',
  template: `
  <div>
    <mat-progress-spinner
      color="primary"
      diameter="24"
      strokeWidth="2"
      mode="indeterminate">
    </mat-progress-spinner>
  </div>
  `
})
export class SpinnerComponent {
}
