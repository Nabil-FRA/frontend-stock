import { ComponentFixture, TestBed } from '@angular/core/testing';
// CORRECTION : Importe le nom de classe et le chemin du fichier corrects
import { MouvementStockListComponent } from './mouvement-stock-list.component';

// CORRECTION : Le nom du test est mis à jour
describe('MouvementStockListComponent', () => {
  // CORRECTION : Le type des variables est mis à jour
  let component: MouvementStockListComponent;
  let fixture: ComponentFixture<MouvementStockListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // CORRECTION : Le composant importé est mis à jour
      imports: [MouvementStockListComponent]
    })
    .compileComponents();

    // CORRECTION : Le composant créé est mis à jour
    fixture = TestBed.createComponent(MouvementStockListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
