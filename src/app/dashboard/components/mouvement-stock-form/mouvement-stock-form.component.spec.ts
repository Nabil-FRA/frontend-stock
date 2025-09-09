import { ComponentFixture, TestBed } from '@angular/core/testing';
// CORRECTION : Importe le nom de classe et le chemin du fichier corrects
import { MouvementStockFormComponent } from './mouvement-stock-form.component';

// CORRECTION : Le nom du test est mis à jour
describe('MouvementStockFormComponent', () => {
  // CORRECTION : Le type des variables est mis à jour
  let component: MouvementStockFormComponent;
  let fixture: ComponentFixture<MouvementStockFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // CORRECTION : Le composant importé est mis à jour
      imports: [MouvementStockFormComponent]
    })
    .compileComponents();

    // CORRECTION : Le composant créé est mis à jour
    fixture = TestBed.createComponent(MouvementStockFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
