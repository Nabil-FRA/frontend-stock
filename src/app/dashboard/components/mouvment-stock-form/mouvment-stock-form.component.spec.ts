import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouvmentStockFormComponent } from './mouvment-stock-form.component';

describe('MouvmentStockFormComponent', () => {
  let component: MouvmentStockFormComponent;
  let fixture: ComponentFixture<MouvmentStockFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MouvmentStockFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MouvmentStockFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
