import { Component, inject, HostListener } from '@angular/core';
import { NavService } from './nav.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  faBars = faBars;
  faXmark = faXmark;

  private navService = inject(NavService);
  menuOpen = false;

  onNavigateToSection(section: string) {
    const element = document.getElementById(section);
    if (element) {
      const yOffset = -96;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth > 950 && this.menuOpen) {
      this.menuOpen = false;
    }
  }
}
