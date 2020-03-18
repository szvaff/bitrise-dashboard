import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BuildResponse } from '../model/build.model';

@Injectable({
  providedIn: 'root',
})
export class BuildApi {

  constructor(private http: HttpClient) { }

  findByOrgSlug(orgSlug: string): Observable<BuildResponse> {
    return this.http.get(`builds?owner_slug=${orgSlug}`) as Observable<BuildResponse>;
  }
}
