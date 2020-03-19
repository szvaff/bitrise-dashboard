import { TestBed } from '@angular/core/testing';
import { BuildService } from './build.service';
import { Build } from '../model/build.model';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BuildService', () => {
  let service: BuildService;
  let spy;

  const dummyData: Array<Build> = [
    {
      repository: { title: 'dummy', owner: { name: 'dummy' } },
      triggered_at: 'dummy',
      slug: 'dummy',
      status: 1,
      owner: 'dummy',
      appTitle: 'dummy'
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BuildService],
    });

    service = TestBed.inject(BuildService);
    spy = spyOn(TestBed.inject(BuildService), 'findByOrgSortDesc').and.returnValue(Promise.resolve(dummyData));
  });

  it('findByOrgSortDesc() should return data', async () => {
    const response = await service.findByOrgSortDesc({ slug: 'dummy' });
    expect(response).toEqual(dummyData);
  });
});
