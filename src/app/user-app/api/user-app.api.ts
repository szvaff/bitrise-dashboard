import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAppResponse } from '../model/user-app.model';

@Injectable({
  providedIn: 'root',
})
export class UserAppApi {

  constructor(private http: HttpClient) { }

  findAllSortDesc(): Observable<UserAppResponse> {
    return this.http.get('apps?sort_by=last_build_at') as Observable<UserAppResponse>;
  }

  findByOrgSlugSortDesc(orgSlug: string): Observable<UserAppResponse> {
    return this.http.get(`organizations/${orgSlug}/apps?sort_by=last_build_at`) as Observable<UserAppResponse>;
  }
}
