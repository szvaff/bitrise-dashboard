import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrganizationResponse } from '../model/organization.model';

@Injectable({
  providedIn: 'root',
})
export class OrganizationsApi {

  constructor(private http: HttpClient) { }

  findAll(): Observable<OrganizationResponse> {
    return this.http.get('organizations') as Observable<OrganizationResponse>;
  }
}
