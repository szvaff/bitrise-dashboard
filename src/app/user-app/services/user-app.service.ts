import { Injectable } from '@angular/core';
import { UserAppApi } from '../api/user-app.api';

@Injectable({
  providedIn: 'root'
})
export class UserAppService {

  constructor(private api: UserAppApi) { }

  async findByOrgSortDesc(org?) {
    if (!org) {
      return (await this.api.findAllSortDesc().toPromise()).data;
    }

    return (await this.api.findByOrgSlugSortDesc(org.slug).toPromise()).data;
  }
}
