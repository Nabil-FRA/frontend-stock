import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalisationListComponent } from './localisation-list.component';

describe('LocalisationListComponent', () => {
  let component: LocalisationListComponent;
  let fixture: ComponentFixture<LocalisationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalisationListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalisationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
