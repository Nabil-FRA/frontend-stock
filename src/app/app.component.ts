import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // <-- IMPORTANT

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule], // <-- IMPORTANT
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // ou .scss
})
export class AppComponent {
  title = 'frontend-stock';
}
