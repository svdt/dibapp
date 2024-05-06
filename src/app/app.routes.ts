import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { SurveysComponent } from './surveys/surveys.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Index route
    { path: 'surveys', component: SurveysComponent },
    { path: 'about', component: AboutComponent },
    
];
