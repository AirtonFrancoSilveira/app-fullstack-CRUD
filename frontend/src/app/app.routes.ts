// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProfessorDashboardComponent } from './components/professor-dashboard/professor-dashboard.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'professor-dashboard', component: ProfessorDashboardComponent },
  { path: 'student-dashboard', component: StudentDashboardComponent },
];
