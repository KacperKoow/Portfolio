import { Component, inject } from '@angular/core';
import { NavService } from '../nav/nav.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  private navService = inject(NavService);

  onNavigateToSection(section: string) {
    const element = document.getElementById(section);
    if (element) {
      const yOffset = -96;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}
