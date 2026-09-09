import { Component } from '@angular/core';
@Component({ selector: 'app-proyects', templateUrl: './proyects.component.html', styleUrls: ['./proyects.component.scss'], standalone: false })
export class ProyectsComponent {
  selectedProject: any = null;
  tilt(event: MouseEvent): void {
    if (window.matchMedia('(prefers-reduced-motion: reduce), (max-width: 768px)').matches) { return; }
    const card = event.currentTarget as HTMLElement;
    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - .5;
    const y = (event.clientY - bounds.top) / bounds.height - .5;
    card.style.transform = `perspective(900px) rotateX(${y * -4}deg) rotateY(${x * 4}deg) translateY(-6px)`;
  }

  resetTilt(event: MouseEvent): void { (event.currentTarget as HTMLElement).style.transform = ''; }
  openDetails(project: any): void { this.selectedProject = project; }
  closeDetails(): void { this.selectedProject = null; }
}
