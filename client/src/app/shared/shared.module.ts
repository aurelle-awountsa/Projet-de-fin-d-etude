import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from 'ngx-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AddClassDirective} from './directives/add-class.directive';
import {ValidInputDirective} from './directives/valid-input.directive';
import {FilterPipe} from './pipes/filter.pipe';
import {ReplacePipe} from './pipes/replace.pipe';
import {TruncatePipe} from './pipes/truncate.pipe';
import {FilterLogsPipe} from './pipes/filter-logs.pipe';
import {ButtonModule} from 'primeng/button';
import {NavbarComponent} from './components/navbar/navbar.component';
import {RouterModule} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {DividerModule} from 'primeng/divider';
import {FullCalendarModule} from "primeng/fullcalendar";
import {ConfirmationDialogComponent} from './components/confirmation-dialog/confirmation-dialog.component';
import {DialogService} from "primeng/dynamicdialog";
import {ToastModule} from 'primeng/toast';
import {TabMenuModule} from 'primeng/tabmenu';
import {TabViewModule} from 'primeng/tabview';
import {BadgeModule} from 'primeng/badge';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {RatingModule} from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import {SplitButtonModule} from 'primeng/splitbutton';
import {PanelModule} from 'primeng/panel';

@NgModule({
  declarations: [
    TruncatePipe,
    ReplacePipe,
    FilterPipe,
    ValidInputDirective,
    AddClassDirective,
    FilterLogsPipe,
    NavbarComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FullCalendarModule,
    PanelModule,
    ButtonModule,
    ToastModule,
    MessagesModule,
    SplitButtonModule,
    RatingModule,
    MessageModule,
    DividerModule,
    TagModule,
    TabMenuModule,
    TabViewModule,
    BadgeModule,
    RouterModule,
    NgxPaginationModule,
    NgbModule,
    TranslateModule,
    RouterModule,
  ],
  exports: [
    TruncatePipe,
    ReplacePipe,
    FilterPipe,
    ValidInputDirective,
    AddClassDirective,
    FilterLogsPipe,
    RatingModule,
    FullCalendarModule,
    ButtonModule,
    SplitButtonModule,
    PanelModule,
    TabMenuModule,
    TagModule,
    ToastModule,
    DividerModule,
    TabViewModule,
    MessagesModule,
    MessageModule,
    BadgeModule,
    ReactiveFormsModule,
    TranslateModule,
    ConfirmationDialogComponent,
    FormsModule,
    HttpClientModule,
    NavbarComponent,
    NgxPaginationModule,
    NgbModule
  ],
  providers: [
    DialogService
  ],
})
export class SharedModule {
}
