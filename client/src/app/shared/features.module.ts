import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ChartModule} from "angular2-chartjs";

import {SharedModule} from "../shared/shared.module";
import {ReviewsComponent} from "./components/reviews/reviews.component";
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ProfileComponent} from './components/profile/profile.component';
import {ChartsComponent} from './components/dashboard/charts/charts.component';
import {QuestionsComponent} from './components/questions/questions.component';
import {ResultsComponent} from './components/questions/results/results.component';
import { VerifyEmailComponent } from './components/register/verify-email/verify-email.component';
import {ReplacePipe} from "@app/shared/pipes/replace.pipe";
import { AppointmentComponent } from './components/appointment/appointment.component';


const appRoutes: Routes = [
  {path: "register", pathMatch: 'full', component: RegisterComponent},
  {path: "verify-email/:key", component: VerifyEmailComponent},
  {path: "login", pathMatch: 'full', component: LoginComponent},
  {path: "dashboard", component: AppointmentComponent},
  {path: "questions", component: QuestionsComponent},
  {path: "results", component: ResultsComponent},
  {path: "reviews", component: ReviewsComponent},
  {path: "profile/:id", component: ProfileComponent}
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ProfileComponent,
    ChartsComponent,
    QuestionsComponent,
    ResultsComponent,
    ReviewsComponent,
    VerifyEmailComponent,
    AppointmentComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ChartModule,
    RouterModule.forChild(appRoutes),
  ],
  exports: [RouterModule],
  providers: [
    ReplacePipe
  ],
})
export class FeaturesModule { }
