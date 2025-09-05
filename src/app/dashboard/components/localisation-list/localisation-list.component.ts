import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LocalisationService } from '../../../core/localisation.service';

@Component({
  selector: 'app-localisation-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './localisation-list.component.html',
})
export class LocalisationListComponent implements OnInit {
  localisations: any[] = [];
  constructor(private localisationService: LocalisationService) {}
  ngOnInit(): void { this.load(); }
  load(): void {
    this.localisationService.getLocalisations().subscribe(data => this.localisations = data);
  }
  delete(id: number): void {
    if (confirm('Êtes-vous sûr ?')) {
      this.localisationService.deleteLocalisation(id).subscribe(() => this.load());
    }
  }
}
