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
import { OfferedServicesComponent } from './offered-services/offered-services.component';
import { BreeNanComponent } from './bree-nan/bree-nan.component';
import { AuthorsComponent } from './authors/authors.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { RedirectComponent } from './redirect/redirect.component';
import { shortlinkResolver } from './shared/services/shortlink-resolver.service';

const routes: Routes = [
  { path: 'home', component: MainPageComponent },
  { path: '', component: SlideshowComponent }, 
  { path: 'header', component: HeaderComponent },
  { path: 'childrens-books', component: ChildrensbooksComponent },
  { path: 'english-books', component: EnglishbooksComponent },
  { path: 'german-books', component: GermanbooksComponent },
  { path: 'services', component: OfferedServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'authors', component: AuthorsComponent },
  { path: 'bree-nan', component: BreeNanComponent },
  { path: ':shortId', resolve: { redirect: shortlinkResolver }, component: RedirectComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
