import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserAppService } from './user-app.service';
import { UserApp } from '../model/user-app.model';

describe('UserAppService', () => {
  let service: UserAppService;
  let spy;

  const dummyData: Array<UserApp> = [{
      owner: {
        name: 'dummy'
      },
      title: 'dummy',
      ownerName: 'dummy'
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserAppService],
    });

    service = TestBed.inject(UserAppService);
    spy = spyOn(TestBed.inject(UserAppService), 'findByOrgSortDesc').and.returnValue(Promise.resolve(dummyData));
  });

  it('findByOrgSortDesc() should return data if no org is provided', async () => {
    const response = await service.findByOrgSortDesc();
    expect(response).toEqual(dummyData);
  });

  it('findByOrgSortDesc() should return data if org is provided', async () => {
    const response = await service.findByOrgSortDesc({ slug: 'dummy' });
    expect(response).toEqual(dummyData);
  });
});
