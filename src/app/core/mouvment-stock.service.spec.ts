import { TestBed } from '@angular/core/testing';

import { MouvmentStockService } from './mouvment-stock.service';

describe('MouvmentStockService', () => {
  let service: MouvmentStockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MouvmentStockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
