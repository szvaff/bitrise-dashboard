import { Component, Input } from '@angular/core';

@Component({
  selector: 'bd-user-app',
  templateUrl: './user-app.component.html',
  styleUrls: ['./user-app.component.scss']
})
export class UserAppComponent {
  @Input() public owner: string;
  @Input() public appTitle: string;
}
