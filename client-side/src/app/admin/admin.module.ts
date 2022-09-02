import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from "@angular/router";
import { SharedModule } from "../shared/shared.module";

import {ReplacePipe} from "../shared/pipes/replace.pipe";
import {FilterLogsPipe} from "../shared/pipes/filter-logs.pipe";

import {AllQuestionsComponent} from "./components/all-questions/all-questions.component";
import {UsersTableComponent} from "./components/users-table/users-table.component";
import {MetricsComponent} from "./components/metrics/metrics.component";
import {AllUsersComponent} from "./components/all-users/all-users.component";
import { MinNavBArComponent } from './components/min-nav-bar/min-nav-bar.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ViewBookingComponent } from './components/calendar/view-booking/view-booking.component';
import {DialogService} from "primeng/dynamicdialog";
import {CalendarModule} from 'primeng/calendar';

const appRoutes : Routes = [
  { path: "questions/all", component: AllQuestionsComponent},
  { path: "users/info", component: UsersTableComponent},
  { path: "users/metrics", component: MetricsComponent},
  { path: "users/all", component: AllUsersComponent},
  { path: "calendar", component: CalendarComponent},
];

@NgModule({
  declarations: [
    AllQuestionsComponent,
    UsersTableComponent,
    MetricsComponent,
    AllUsersComponent,
    MinNavBArComponent,
    CalendarComponent,
    ViewBookingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CalendarModule,
    RouterModule.forChild(appRoutes),
  ],
  exports: [RouterModule],
  providers: [
    ReplacePipe,
    DialogService,
    FilterLogsPipe
  ],
})
export class AdminModule { }
