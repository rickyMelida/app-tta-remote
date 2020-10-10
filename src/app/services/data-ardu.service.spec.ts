import { TestBed } from '@angular/core/testing';

import { DataArduService } from './data-ardu.service';

describe('DataArduService', () => {
  let service: DataArduService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataArduService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
