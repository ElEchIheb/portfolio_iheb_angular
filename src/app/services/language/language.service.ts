import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  language: "fr" | "en";

  constructor(
    public translateService: TranslateService,
    private location: Location,
  ) {}

  initLanguage() {
    // Ajouter les langues disponibles
    this.translateService.addLangs(["en", "fr"]);

    // Forcer l'anglais par défaut
    this.language = "en";
    this.translateService.setDefaultLang(this.language);

    // Changer l'URL sans navigation
    this.location.go(this.language);
  }

  changeLanguage(language) {
    this.translateService.setDefaultLang(language);
    this.location.go(language);
    this.language = language;
  }
}
