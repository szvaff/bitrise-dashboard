import { Injectable } from '@angular/core';
import { OrganizationsApi } from '../api/organizations.api';
import { Organization } from '../model/organization.model';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  constructor(private api: OrganizationsApi) { }

  async findAll(): Promise<Array<Organization>> {
    return (await this.api.findAll().toPromise()).data.map(v => new Organization(v));
  }
}
