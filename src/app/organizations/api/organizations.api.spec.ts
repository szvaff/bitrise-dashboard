import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { OrganizationsApi } from './organizations.api';
import { OrganizationResponse } from '../model/organization.model';

describe('OrganizationsApi', () => {
  let service: OrganizationsApi;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OrganizationsApi],
    });

    service = TestBed.inject(OrganizationsApi);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  const dummyResponse: OrganizationResponse = {
    data: [{
      slug: 'dummy'
    }]
  };

  it('findAll() should return data', () => {
    service.findAll().subscribe((res) => {
      expect(res).toEqual(dummyResponse);
    });

    const req = httpMock.expectOne('organizations');
    expect(req.request.method).toBe('GET');
    req.flush(dummyResponse);
  });
});
