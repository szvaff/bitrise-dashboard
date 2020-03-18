import { Injectable } from '@angular/core';
import { OrganizationsApi } from '../api/organizations.api';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  constructor(private api: OrganizationsApi) { }

  async findAll() {
    return (await this.api.findAll().toPromise()).data;
  }
}
