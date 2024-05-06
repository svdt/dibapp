import { Component, Input } from '@angular/core';
import { Survey } from './survey';

@Component({
  selector: 'app-survey-item',
  standalone: true,
  imports: [],
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.scss'
})
export class SurveyComponent {

  @Input() survey!: Survey; // Eingabe: Die aktuelle Aufgabe



}
