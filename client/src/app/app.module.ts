import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CoreModule} from './core/core.module';

import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
import {PageNotFoundComponent} from "@app/core/components/page-not-found/page-not-found.component";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import(`./admin/admin.module`).then(module => module.AdminModule)
  },
  {
    path: '',
    loadChildren: () => import(`./features/features.module`).then(module => module.FeaturesModule)
  },
  {path: "**", component: PageNotFoundComponent}
];

//enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/', '.json'),
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
