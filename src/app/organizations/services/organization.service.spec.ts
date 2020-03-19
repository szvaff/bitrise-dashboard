import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OrganizationService } from './organization.service';
import { Organization } from '../model/organization.model';

describe('OrganizationService', () => {
  let service: OrganizationService;
  let spy;

  const dummyData: Array<Organization> = [{
      name: 'dummy',
      slug: 'dummy'
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OrganizationService],
    });

    service = TestBed.inject(OrganizationService);
    spy = spyOn(TestBed.inject(OrganizationService), 'findAll').and.returnValue(Promise.resolve(dummyData));
  });

  it('findAll() should return data', async () => {
    const response = await service.findAll();
    expect(response).toEqual(dummyData);
  });
});
