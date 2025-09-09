import { TestBed } from '@angular/core/testing';
// CORRECTION : Importe le nom de classe correct depuis le fichier correct
import { MouvementStockService } from './mouvement-stock.service';

// CORRECTION : Le nom du test est mis à jour
describe('MouvementStockService', () => {
  // CORRECTION : Le type de la variable est mis à jour
  let service: MouvementStockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    // CORRECTION : Le service injecté est mis à jour
    service = TestBed.inject(MouvementStockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
