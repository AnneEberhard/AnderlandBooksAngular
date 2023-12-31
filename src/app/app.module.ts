import { NgModule } from '@angular/core';
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
import { ServicesComponent } from './services/services.component';
import { BreeNanComponent } from './bree-nan/bree-nan.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { AuthorsComponent } from './authors/authors.component';
import { ScrollToTopButtonComponent } from './shared/components/scroll-to-top-button/scroll-to-top-button.component';
import { BackgroundContainerComponent } from './shared/components/background-container/background-container.component';


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
    ServicesComponent,
    BreeNanComponent,
    AuthorsComponent,
    ScrollToTopButtonComponent,
    BackgroundContainerComponent
  ],
  imports: [
    BrowserModule,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
