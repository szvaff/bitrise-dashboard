import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Organization } from 'src/app/organizations/model/organization.model';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  selectedOrgSubject = new Subject<Organization>();

  setSelectedOrganization(newValue: Organization) {
    this.selectedOrgSubject.next(newValue);
  }

  getSelectedOrganizationSubject(): Subject<Organization> {
    return this.selectedOrgSubject;
  }
}
