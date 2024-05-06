import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Survey } from '../survey/survey';
 
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class SurveysService {

  surveys: Survey[] = [
    {id: 1, question: "What?", answears: ["Ok", "Dokey"]},
    {id: 2, question: "Why?", answears: ["Ok"]}
  ];

  private apiBaseUrl = 'http://localhost:5000/surveys';

  constructor(private http: HttpClient) { }

  // getSurveys(): Observable<Survey[]> {
  //   return this.http.get<Survey[]>(this.apiBaseUrl);
  // }

  getSurveys(): Survey[] {
    return this.surveys;
  }

  addSurvey(survey: Survey) {
    this.surveys.push(survey);
  }

  removeSurvey(i: number) {
    this.surveys.splice(i, 1);
  };

  addAnswear(i: number, answear: string) {
    this.surveys[i].answears.push(answear);
  }
  
  removeAnswear(si: number, ai: number) {
    this.surveys[si].answears.splice(ai, 1);
  }

}
