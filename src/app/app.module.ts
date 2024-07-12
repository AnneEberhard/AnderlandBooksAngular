import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { Router } from "@angular/router";
import * as Sentry from "@sentry/angular";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ChildrensbooksComponent } from './childrensbooks/childrensbooks.component';
import { GermanbooksComponent } from './germanbooks/germanbooks.component';
import { EnglishbooksComponent } from './englishbooks/englishbooks.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ContactComponent } from './contact/contact.component';
import { OfferedServicesComponent } from './offered-services/offered-services.component';
import { BreeNanComponent } from './bree-nan/bree-nan.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AuthorsComponent } from './authors/authors.component';
import { ScrollToTopButtonComponent } from './shared/components/scroll-to-top-button/scroll-to-top-button.component';
import { BackgroundContainerComponent } from './shared/components/background-container/background-container.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    ImprintComponent,
    MainPageComponent,
    ChildrensbooksComponent,
    GermanbooksComponent,
    EnglishbooksComponent,
    FooterComponent,
    HeaderComponent,
    PrivacyPolicyComponent,
    ContactComponent,
    OfferedServicesComponent,
    BreeNanComponent,
    AuthorsComponent,
    ScrollToTopButtonComponent,
    BackgroundContainerComponent,
    SlideshowComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'de',
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })

  ],
  providers: [
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        showDialog: true,
      }),
    }, {
      provide: Sentry.TraceService,
      deps: [Router],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {},
      deps: [Sentry.TraceService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
