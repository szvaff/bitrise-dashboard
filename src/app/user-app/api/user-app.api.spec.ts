import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserAppApi } from './user-app.api';
import { UserAppResponse } from '../model/user-app.model';

describe('UserAppApi', () => {
  let service: UserAppApi;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserAppApi],
    });

    service = TestBed.inject(UserAppApi);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  const dummyResponse: UserAppResponse = {
    data: [{
      owner: {
        name: 'dummy'
      },
      title: 'dummy',
      ownerName: 'dummy'
    }]
  };

  it('findAllSortDesc() should return data', () => {
    service.findAllSortDesc().subscribe((res) => {
      expect(res).toEqual(dummyResponse);
    });

    const req = httpMock.expectOne('apps?sort_by=last_build_at');
    expect(req.request.method).toBe('GET');
    req.flush(dummyResponse);
  });

  it('findByOrgSlugSortDesc() should return data', () => {
    const orgSlug = 'dummy';
    service.findByOrgSlugSortDesc(orgSlug).subscribe((res) => {
      expect(res).toEqual(dummyResponse);
    });

    const req = httpMock.expectOne(`organizations/${orgSlug}/apps?sort_by=last_build_at`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyResponse);
  });
});
