import { Component } from '@angular/core';
@Component({ selector: 'app-more-proyects', templateUrl: './more-proyects.component.html', styleUrls: ['./more-proyects.component.scss'], standalone: false })
export class MoreProyectsComponent {
  certificateImages = Array.from({ length: 14 }, (_, index) => index + 1);
  activeCert = 1;
  previewCert: number | null = null;
  selectCert(cert: number): void { if (cert === this.activeCert) { this.previewCert = cert; } else { this.activeCert = cert; } }
  previousCert(): void { this.activeCert = this.activeCert === 1 ? this.certificateImages.length : this.activeCert - 1; }
  nextCert(): void { this.activeCert = this.activeCert === this.certificateImages.length ? 1 : this.activeCert + 1; }
  coverPosition(cert: number): string {
    const previous = this.activeCert === 1 ? this.certificateImages.length : this.activeCert - 1;
    const next = this.activeCert === this.certificateImages.length ? 1 : this.activeCert + 1;
    return cert === this.activeCert ? 'cover-center' : cert === previous ? 'cover-left' : cert === next ? 'cover-right' : 'cover-hidden';
  }
  closeCert(): void { this.previewCert = null; }
  tilt(event: MouseEvent): void {
    if (window.matchMedia('(prefers-reduced-motion: reduce), (max-width: 768px)').matches) { return; }
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - .5;
    const y = (event.clientY - rect.top) / rect.height - .5;
    card.style.transform = `perspective(700px) rotateX(${y * -5}deg) rotateY(${x * 5}deg) translateY(-4px)`;
    card.style.setProperty('--glow-x', `${(x + .5) * 100}%`);
  }
  resetTilt(event: MouseEvent): void { (event.currentTarget as HTMLElement).style.transform = ''; }
}
