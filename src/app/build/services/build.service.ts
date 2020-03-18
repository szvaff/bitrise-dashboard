import { Injectable } from '@angular/core';
import { BuildApi } from '../api/build.api';

@Injectable({
  providedIn: 'root'
})
export class BuildService {

  constructor(private api: BuildApi) { }

  async findAllSortDesc() {
    const response = await this.api.findAll().toPromise();
    response.data.sort((a, b) => new Date(b.triggered_at).getTime() - new Date(a.triggered_at).getTime());
    return response.data;
  }
}
