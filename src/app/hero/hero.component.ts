import { Component, inject } from '@angular/core';
import { NavService } from '../nav/nav.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  private navService = inject(NavService);

  onNavigateToSection(section: string) {
    this.navService.navigateToSection(section);
  }
}
