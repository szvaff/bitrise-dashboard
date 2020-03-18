import { Injectable } from '@angular/core';
import { BuildApi } from '../api/build.api';
import { Build } from '../model/build.model';
import { Organization } from 'src/app/organizations/model/organization.model';

@Injectable({
  providedIn: 'root'
})
export class BuildService {

  constructor(private api: BuildApi) { }

  async findByOrgSortDesc(org: Organization): Promise<Array<Build>> {
    org = org || { slug: '' };
    org.slug = org.slug || '';

    const response = await this.api.findByOrgSlug(org.slug).toPromise();
    response.data.sort((a, b) => new Date(b.triggered_at).getTime() - new Date(a.triggered_at).getTime());

    return response.data.map(v => new Build(v));
  }
}
