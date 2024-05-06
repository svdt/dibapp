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
    {id: 1, question: "Wohin soll die nächste Reise gehen?", answears: ["Palermo", "Maputo"]},
    {id: 2, question: "Was ist dein Lieblingsessen?", answears: ["Salat"]}
  ];

  private apiBaseUrl = 'http://localhost:5000/surveys';

  constructor(private http: HttpClient) { }

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

  // getSurveys(): Observable<Survey[]> {
  //   return this.http.get<Survey[]>(this.apiBaseUrl);
  // }
  // addSurvey(survey: Survey): Observable<Survey> {
  //   return this.http.post<Survey>(this.apiBaseUrl, survey, httpOptions);
  // }
  // removeSurvey(i: number): Observable<void> {
  //   const url = `${this.apiBaseUrl}/${i}`;
  //   var tmp = this.http.delete<void>(url);
  //   console.log(tmp);
  //   return tmp;
  // };
  // updateSurvey(i: number, survey: Survey) {
  //   const url = `${this.apiBaseUrl}/${i}`;
  //   var tmp = this.http.put<Survey>(url, survey, httpOptions);
  //   console.log(tmp);
  //   console.log(survey);
  //   return this.http.put<Survey>(url, survey, httpOptions);
  // }
}
