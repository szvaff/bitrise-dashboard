import { Injectable } from '@angular/core';
import { UserAppApi } from '../api/user-app.api';
import { UserApp } from '../model/user-app.model';
import { Organization } from 'src/app/organizations/model/organization.model';

@Injectable({
  providedIn: 'root'
})
export class UserAppService {

  constructor(private api: UserAppApi) { }

  async findByOrgSortDesc(org?: Organization) {
    if (!org || !org.slug) {
      return (await this.api.findAllSortDesc().toPromise()).data.map(v => new UserApp(v));
    }

    return (await this.api.findByOrgSlugSortDesc(org.slug).toPromise()).data.map(v => new UserApp(v));
  }
}

