import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ChildrensbooksComponent } from './childrensbooks/childrensbooks.component';
import { GermanbooksComponent } from './germanbooks/germanbooks.component';
import { EnglishbooksComponent } from './englishbooks/englishbooks.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ImprintComponent,
    MainPageComponent,
    ChildrensbooksComponent,
    GermanbooksComponent,
    EnglishbooksComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
