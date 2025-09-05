import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouvmentStockListComponent } from './mouvment-stock-list.component';

describe('MouvmentStockListComponent', () => {
  let component: MouvmentStockListComponent;
  let fixture: ComponentFixture<MouvmentStockListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MouvmentStockListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MouvmentStockListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
