import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAppApi {

  constructor(private http: HttpClient) { }

  findAllSortDesc(): Observable<any> {
    return this.http.get('apps?sort_by=last_build_at');
  }

  findByOrgSlugSortDesc(orgSlug): Observable<any> {
    return this.http.get(`organizations/${orgSlug}/apps?sort_by=last_build_at`);
  }
}
