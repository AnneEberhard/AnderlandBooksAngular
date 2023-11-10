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
          formats: {
            eBook: { title: 'eBook', link: 'eBook Link 1' },
            paperback: { title: 'Taschenbuch', link: 'Taschenbuch Link 2' },
            hardcover: { title: 'Gebundenes Buch', link: 'Gebundenes Buch Link 3' }
          }
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
          formats: {
            eBook: { title: 'eBook', link: 'eBook Link 1' },
            paperback: { title: 'Taschenbuch', link: 'Taschenbuch Link 2' },
            hardcover: { title: 'Gebundenes Buch', link: 'Gebundenes Buch Link 3' }
          }
        },
        // Weitere Bücher für die Fantasy-Sektion
      ]
    }
    // Weitere Sektionen, wenn benötigt
  ];



  constructor(private pageService: PageService, public translate: TranslateService) { }

  scrollToSection(sectionId: string) {
    this.pageService.scrollToSection(sectionId);
  }


  getBookFormats(book: any): any[] { 
    const formats = book.formats || {}; 
    //assigns the object of the book.formats if it exists, otherwise empty object
    return Object.keys(formats).map(format => { 
//returns an array of the keys of the object format. 
//map iterates through this array and transforms each element, so that the transformed object is returned in the end
      const formatData = formats[format]; 
// assigns content at the key 'format' out of book.formats. format is the index of the function
      return { //makes a new object for each Element in map with the attributes below
        label: formatData.title,
        link: formatData.link
      };
    });
  }//returns a list of objects with infos for title and link



}
