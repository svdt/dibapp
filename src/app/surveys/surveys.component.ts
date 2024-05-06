import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';


import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {provideNativeDateAdapter} from '@angular/material/core';

import { SurveyComponent } from '../survey/survey.component';
import { Survey } from '../survey/survey';
import { SurveysService } from '../services/surveys.service';

import {MatChipEditedEvent, MatChipInputEvent, MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-surveys',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [FormsModule, MatChipsModule, CommonModule, MatListModule, MatDividerModule, 
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule, 
    SurveyComponent],
  templateUrl: './surveys.component.html',
  styleUrl: './surveys.component.scss'
})
export class SurveysComponent {
  // @ViewChild(MatAccordion) accordion: MatAccordion;

  question!: string;
  answear!: string;

  surveys: Survey[] = [];

  constructor(private surveyService: SurveysService) {}

  ngOnInit(): void {
    // Diese Methode wird aufgerufen, wenn die Komponente initialisiert wird
    // Hier werden die Aufgaben geladen und der tasks-Array aktualisiert
    // this.surveyService.getSurveys().subscribe((surveys) => (this.surveys = surveys));
    this.surveys = this.surveyService.getSurveys();
    // this.surveyService.getSurveys().subscribe((surveys: Survey[]) => {
    //   this.surveys = surveys;
    // });
  }

  onSubmitSurvey() {
    const newSurvey: Survey = {
      id: this.surveys.length, // Set the ID accordingly
      question: this.question,
      answears: []
    };
    this.surveyService.addSurvey(newSurvey);
    this.question = "";
  }

  removeSurvey(i: number) {
    this.surveyService.removeSurvey(i);
  }

  onSubmitAnswear(i: number) {
    this.surveyService.addAnswear(i, this.answear);
    // this.surveys[i].answears.push(this.answear);
    // this.surveyService.updateSurvey(i, this.surveys[i]);
    this.answear = "";
  }

  removeAnswear(si: number, ai: number) {
    this.surveyService.removeAnswear(si, ai);
    // this.surveys[si].answears.splice(ai, 1);
    // this.surveyService.updateSurvey(si, this.surveys[si]);
  }
}
