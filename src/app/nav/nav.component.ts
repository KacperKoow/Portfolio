import { Component, inject } from '@angular/core';
import { NavService } from './nav.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  private navService = inject(NavService);

  onNavigateToSection(section: string) {
    this.navService.navigateToSection(section);
  }
}
