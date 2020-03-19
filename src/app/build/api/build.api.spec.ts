import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BuildApi } from './build.api';
import { BuildResponse } from '../model/build.model';

describe('BuildApi', () => {
  let service: BuildApi;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BuildApi],
    });

    service = TestBed.inject(BuildApi);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  const dummyResponse: BuildResponse = {
    data: [{
      repository: { title: 'dummy', owner: { name: 'dummy' } },
      triggered_at: 'dummy',
      slug: 'dummy',
      status: 1,
      owner: 'dummy',
      appTitle: 'dummy'
    }]
  };

  it('findByOrgSlug() should return data', () => {
    service.findByOrgSlug('test').subscribe((res) => {
      expect(res).toEqual(dummyResponse);
    });

    const req = httpMock.expectOne('builds?owner_slug=test');
    expect(req.request.method).toBe('GET');
    req.flush(dummyResponse);
  });
});
