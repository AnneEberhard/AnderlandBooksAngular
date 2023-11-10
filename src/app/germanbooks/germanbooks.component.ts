import { Component } from '@angular/core';
import { PageService } from '../page-service/page.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-germanbooks',
  templateUrl: './germanbooks.component.html',
  styleUrls: ['./germanbooks.component.scss']
})
export class GermanbooksComponent {

// In deiner Komponente oder Service-Datei
germanBooks = [
  {
    section: 'historical',
    title: 'Historische Geschichten',
    books: [
      {
        image: 'assets/img/covers/cover-Niklas-kindle.jpg',
        paragraphs: ['Paragraph 1', 'Paragraph 2', 'Paragraph 3'],
        links: ['Link 1', 'Link 2', 'Link 3']
      },
      // Weitere Bücher für die historische Sektion
    ]
  },
  {
    section: 'fantasy',
    title: 'Fantasy',
    books: [
      {
        image: 'assets/img/covers/Von-Elfen-und-Woelfen-kindle-1.jpg',
        paragraphs: ['Paragraph 1', 'Paragraph 2', 'Paragraph 3'],
        links: ['Link 1', 'Link 2', 'Link 3']
      },
      // Weitere Bücher für die Fantasy-Sektion
    ]
  }
  // Weitere Sektionen, wenn benötigt
];

  constructor(private pageService: PageService, public translate: TranslateService) {  }

  scrollToSection(sectionId: string) {
    this.pageService.scrollToSection(sectionId);
  }
}
