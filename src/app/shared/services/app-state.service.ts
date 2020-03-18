import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  selectedOrgSubject = new Subject<any>();

  setSelectedOrganization(newValue) {
    this.selectedOrgSubject.next(newValue);
  }

  getSelectedOrganizationSubject() {
    return this.selectedOrgSubject;
  }
}
