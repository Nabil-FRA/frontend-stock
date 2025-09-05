import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MouvmentStockService } from '../../../core/mouvment-stock.service';

@Component({
  selector: 'app-mouvment-stock-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mouvment-stock-list.component.html',
})
export class MouvmentStockListComponent implements OnInit {
  mouvements: any[] = [];
  constructor(private mouvmentStockService: MouvmentStockService) {}
  ngOnInit(): void {
    this.mouvmentStockService.getMouvements().subscribe(data => this.mouvements = data);
  }
}
