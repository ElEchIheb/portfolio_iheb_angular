import { Component } from '@angular/core';
@Component({ selector: 'app-jobs', templateUrl: './jobs.component.html', styleUrls: ['./jobs.component.scss'], standalone: false })
export class JobsComponent {
  activeTab: 'work' | 'edu' = 'work';
  setTab(tab: 'work' | 'edu'): void { this.activeTab = tab; }
}
