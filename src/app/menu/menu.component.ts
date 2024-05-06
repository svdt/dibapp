import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { SurveysService } from '../services/surveys.service';
import { Survey } from '../survey/survey';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatMenuModule, MatToolbarModule, RouterOutlet, RouterLink, RouterLinkActive],
  providers: [SurveysService],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  surveys: Survey[] = [];

  constructor(private surveyService: SurveysService) {}

  ngOnInit(): void {
    // Diese Methode wird aufgerufen, wenn die Komponente initialisiert wird
    // Hier werden die Aufgaben geladen und der tasks-Array aktualisiert
    this.surveys = this.surveyService.getSurveys();
    // this.surveyService.getSurveys().subscribe((surveys) => (this.surveys = surveys));
  }

}
