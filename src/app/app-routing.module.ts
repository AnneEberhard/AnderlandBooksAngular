import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ImprintComponent } from './imprint/imprint.component';
import { ContactComponent } from './contact/contact.component';
import { ChildrensbooksComponent } from './childrensbooks/childrensbooks.component';
import { EnglishbooksComponent } from './englishbooks/englishbooks.component';
import { GermanbooksComponent } from './germanbooks/germanbooks.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ServicesComponent } from './services/services.component';
import { BreeNanComponent } from './bree-nan/bree-nan.component';
import { AuthorsComponent } from './authors/authors.component';
import { SlideshowComponent } from './slideshow/slideshow.component';

const routes: Routes = [
  { path: 'home', component: MainPageComponent },
  { path: '', component: SlideshowComponent }, 
  { path: 'header', component: HeaderComponent },
  { path: 'childrens-books', component: ChildrensbooksComponent },
  { path: 'english-books', component: EnglishbooksComponent },
  { path: 'german-books', component: GermanbooksComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'authors', component: AuthorsComponent },
  { path: 'bree-nan', component: BreeNanComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
