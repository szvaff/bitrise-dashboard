import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'bd-spacer',
  template: ``,
  styles: [`
    bd-spacer {
      flex: 1 1 auto;
    }
  `]
})
export class SpacerComponent {
}
