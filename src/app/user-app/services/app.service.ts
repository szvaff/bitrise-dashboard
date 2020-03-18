import { Injectable } from '@angular/core';
import { AppApi } from '../api/app.api';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private api: AppApi) { }

  async findAllSortDesc() {
    return (await this.api.findAllSortDesc().toPromise()).data;
  }
}
