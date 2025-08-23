import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { PROJECTS } from './projects';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectComponent, NgOptimizedImage],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects = PROJECTS;
}
