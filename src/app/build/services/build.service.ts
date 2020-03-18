import { Injectable } from '@angular/core';
import { BuildApi } from '../api/build.api';

@Injectable({
  providedIn: 'root'
})
export class BuildService {

  constructor(private api: BuildApi) { }

  async findByOrgSortDesc(org) {
    org = org || { slug: '' };
    org.slug = org.slug || '';
    const response = await this.api.findByOrgSlug(org.slug).toPromise();
    response.data.sort((a, b) => new Date(b.triggered_at).getTime() - new Date(a.triggered_at).getTime());
    return response.data;
  }
}
