import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrganizationsApi {

  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get('organizations');
  }
}
