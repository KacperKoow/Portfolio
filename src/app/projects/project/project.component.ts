import { Component, computed, input } from '@angular/core';
import { Project } from './project.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [FontAwesomeModule, NgOptimizedImage],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent {
  faGlobe = faGlobe;
  faGithub = faGithub;
  project = input.required<Project>();

  imagePath = computed(() => {
    return 'projects-gallery/' + this.project().image;
  });
}
