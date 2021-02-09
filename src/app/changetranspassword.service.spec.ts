import { TestBed } from '@angular/core/testing';

import { ChangetranspasswordService } from './changetranspassword.service';

describe('ChangetranspasswordService', () => {
  let service: ChangetranspasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangetranspasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
