import { Injectable } from '@angular/core';
import { BuildApi } from '../api/build.api';

@Injectable({
  providedIn: 'root'
})
export class BuildService {

  constructor(private api: BuildApi) { }

  async findAllSorted() {
    const response = await this.api.findAll().toPromise();
    return response.data;
  }
}
