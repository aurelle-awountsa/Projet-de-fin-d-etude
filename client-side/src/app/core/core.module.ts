import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {JwtHelperService} from "@auth0/angular-jwt";
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from "../shared/shared.module";

import {ValidateService} from "./services/validate.service";
import {AuthService} from "./services/auth.service";
import {ReviewsService} from "./services/reviews.service";
import {QuestionsService} from "./services/questions.service";
import {HomeComponent} from "./components/home/home.component";
import {FooterComponent} from "./components/footer/footer.component";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {MessageService} from "primeng/api";
import { AboutComponent } from './components/about/about.component';


const appRoutes : Routes = [
  {path: '', redirectTo : '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    PageNotFoundComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(appRoutes),
  ],
  providers: [
    ValidateService,
    MessageService,
    AuthService,
    QuestionsService,
    ReviewsService,
    JwtHelperService
  ]
})
export class CoreModule {}
