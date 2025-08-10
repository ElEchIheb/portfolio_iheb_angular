import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
    selector: 'app-more-proyects',
    templateUrl: './more-proyects.component.html',
    styleUrls: ['./more-proyects.component.scss'],
    standalone: false
})
export class MoreProyectsComponent implements OnInit {

  certifications: number[] = Array.from({ length: 13 }, (_, i) => i + 1);
  selectedCert: number | null = null;  // changer de string à number

  constructor(
    private router: Router,
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  redirect(route: string, event: Event) {
    const id = (event.target as HTMLElement).id;
    if(id === 'demoLink' || id === 'ghLink'){
      return;
    }
    window.open(route, '_blank');
  }

  openCert(certNumber: number) {
    this.selectedCert = certNumber;
  }

  closeCert() {
    this.selectedCert = null;
  }
}
