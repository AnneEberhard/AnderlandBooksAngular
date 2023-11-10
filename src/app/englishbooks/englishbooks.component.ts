import { Component } from '@angular/core';
import { PageService } from '../page-service/page.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-englishbooks',
  templateUrl: './englishbooks.component.html',
  styleUrls: ['./englishbooks.component.scss']
})
export class EnglishbooksComponent {

  englishBooks = [
    {
      section: 'historical',
      title: 'Historical Novels',
      books: [
        {
          image: 'assets/img/covers/daemonentraum.jpg',
          paragraphs: [
            'Paragraph 1',
            'Paragraph 2',
            'Paragraph 3'],
          formats: {
            eBook: { title: 'eBook', link: 'eBook Link 1' },
            paperback: { title: 'Taschenbuch', link: 'Taschenbuch Link 2' },
            hardcover: { title: 'Gebundenes Buch', link: 'Gebundenes Buch Link 3' }
          }
        },
        {
          image: 'assets/img/covers/daemonentraum.jpg',
          paragraphs: [
            'Paragraph 1',
            'Paragraph 2',
            'Paragraph 3'],
          formats: {
            eBook: { title: 'eBook', link: 'eBook Link 1' },
            paperback: { title: 'Taschenbuch', link: 'Taschenbuch Link 2' },
            hardcover: { title: 'Gebundenes Buch', link: 'Gebundenes Buch Link 3' }
          }
        },
        {
          image: 'assets/img/covers/daemonentraum.jpg',
          paragraphs: [
            'Paragraph 1',
            'Paragraph 2',
            'Paragraph 3'],
          formats: {
            eBook: { title: 'eBook', link: 'eBook Link 1' },
            paperback: { title: 'Taschenbuch', link: 'Taschenbuch Link 2' },
            hardcover: { title: 'Gebundenes Buch', link: 'Gebundenes Buch Link 3' }
          }
        },
      ]
    },
    {
      section: 'contemporary',
      title: 'Contemporary',
      books: [
        {
          image: 'assets/img/covers/daemonentraum.jpg',
          paragraphs: [
            'Paragraph 1',
            'Paragraph 2',
            'Paragraph 3'],
          formats: {
            eBook: { title: 'eBook', link: 'eBook Link 1' },
            paperback: { title: 'Taschenbuch', link: 'Taschenbuch Link 2' },
            hardcover: { title: 'Gebundenes Buch', link: 'Gebundenes Buch Link 3' }
          }
        },
        {
          image: 'assets/img/covers/daemonentraum.jpg',
          paragraphs: [
            'Paragraph 1',
            'Paragraph 2',
            'Paragraph 3'],
          formats: {
            eBook: { title: 'eBook', link: 'eBook Link 1' },
            paperback: { title: 'Taschenbuch', link: 'Taschenbuch Link 2' },
            hardcover: { title: 'Gebundenes Buch', link: 'Gebundenes Buch Link 3' }
          }
        },
        {
          image: 'assets/img/covers/daemonentraum.jpg',
          paragraphs: [
            'Paragraph 1',
            'Paragraph 2',
            'Paragraph 3'],
          formats: {
            eBook: { title: 'eBook', link: 'eBook Link 1' },
            paperback: { title: 'Taschenbuch', link: 'Taschenbuch Link 2' },
            hardcover: { title: 'Gebundenes Buch', link: 'Gebundenes Buch Link 3' }
          }
        },
      ]
    },
    {
      section: 'dystopia',
      title: 'Dystopia',
      books: [
        {
          image: 'assets/img/covers/daemonentraum.jpg',
          paragraphs: [
            'Paragraph 1',
            'Paragraph 2',
            'Paragraph 3'],
          formats: {
            eBook: { title: 'eBook', link: 'eBook Link 1' },
            paperback: { title: 'Taschenbuch', link: 'Taschenbuch Link 2' },
            hardcover: { title: 'Gebundenes Buch', link: 'Gebundenes Buch Link 3' }
          }
        },
        {
          image: 'assets/img/covers/daemonentraum.jpg',
          paragraphs: [
            'Paragraph 1',
            'Paragraph 2',
            'Paragraph 3'],
          formats: {
            eBook: { title: 'eBook', link: 'eBook Link 1' },
            paperback: { title: 'Taschenbuch', link: 'Taschenbuch Link 2' },
            hardcover: { title: 'Gebundenes Buch', link: 'Gebundenes Buch Link 3' }
          }
        },
      ]
    },
    {
      section: 'urbanFantasy',
      title: 'Urban Fantasy',
      books: [
        {
          image: 'assets/img/covers/daemonentraum.jpg',
          paragraphs: [
            'Paragraph 1',
            'Paragraph 2',
            'Paragraph 3'],
          formats: {
            eBook: { title: 'eBook', link: 'eBook Link 1' },
            paperback: { title: 'Taschenbuch', link: 'Taschenbuch Link 2' },
            hardcover: { title: 'Gebundenes Buch', link: 'Gebundenes Buch Link 3' }
          }
        },
        {
          image: 'assets/img/covers/daemonentraum.jpg',
          paragraphs: [
            'Paragraph 1',
            'Paragraph 2',
            'Paragraph 3'],
          formats: {
            eBook: { title: 'eBook', link: 'eBook Link 1' },
            paperback: { title: 'Taschenbuch', link: 'Taschenbuch Link 2' },
            hardcover: { title: 'Gebundenes Buch', link: 'Gebundenes Buch Link 3' }
          }
        },
        {
          image: 'assets/img/covers/daemonentraum.jpg',
          paragraphs: [
            'Paragraph 1',
            'Paragraph 2',
            'Paragraph 3'],
          formats: {
            eBook: { title: 'eBook', link: 'eBook Link 1' },
            paperback: { title: 'Taschenbuch', link: 'Taschenbuch Link 2' },
            hardcover: { title: 'Gebundenes Buch', link: 'Gebundenes Buch Link 3' }
          }
        },
        {
          image: 'assets/img/covers/daemonentraum.jpg',
          paragraphs: [
            'Paragraph 1',
            'Paragraph 2',
            'Paragraph 3'],
          formats: {
            eBook: { title: 'eBook', link: 'eBook Link 1' },
            paperback: { title: 'Taschenbuch', link: 'Taschenbuch Link 2' },
            hardcover: { title: 'Gebundenes Buch', link: 'Gebundenes Buch Link 3' }
          }
        },
        {
          image: 'assets/img/covers/daemonentraum.jpg',
          paragraphs: [
            'Paragraph 1',
            'Paragraph 2',
            'Paragraph 3'],
          formats: {
            eBook: { title: 'eBook', link: 'eBook Link 1' },
            paperback: { title: 'Taschenbuch', link: 'Taschenbuch Link 2' },
            hardcover: { title: 'Gebundenes Buch', link: 'Gebundenes Buch Link 3' }
          }
        },
        {
          image: 'assets/img/covers/daemonentraum.jpg',
          paragraphs: [
            'Paragraph 1',
            'Paragraph 2',
            'Paragraph 3'],
          formats: {
            eBook: { title: 'eBook', link: 'eBook Link 1' },
            paperback: { title: 'Taschenbuch', link: 'Taschenbuch Link 2' },
            hardcover: { title: 'Gebundenes Buch', link: 'Gebundenes Buch Link 3' }
          }
        },
        {
          image: 'assets/img/covers/daemonentraum.jpg',
          paragraphs: [
            'Paragraph 1',
            'Paragraph 2',
            'Paragraph 3'],
          formats: {
            eBook: { title: 'eBook', link: 'eBook Link 1' },
            paperback: { title: 'Taschenbuch', link: 'Taschenbuch Link 2' },
            hardcover: { title: 'Gebundenes Buch', link: 'Gebundenes Buch Link 3' }
          }
        },
        {
          image: 'assets/img/covers/daemonentraum.jpg',
          paragraphs: [
            'Paragraph 1',
            'Paragraph 2',
            'Paragraph 3'],
          formats: {
            eBook: { title: 'eBook', link: 'eBook Link 1' },
            paperback: { title: 'Taschenbuch', link: 'Taschenbuch Link 2' },
            hardcover: { title: 'Gebundenes Buch', link: 'Gebundenes Buch Link 3' }
          }
        },
        {
          image: 'assets/img/covers/daemonentraum.jpg',
          paragraphs: [
            'Paragraph 1',
            'Paragraph 2',
            'Paragraph 3'],
          formats: {
            eBook: { title: 'eBook', link: 'eBook Link 1' },
            paperback: { title: 'Taschenbuch', link: 'Taschenbuch Link 2' },
            hardcover: { title: 'Gebundenes Buch', link: 'Gebundenes Buch Link 3' }
          }
        },
        {
          image: 'assets/img/covers/daemonentraum.jpg',
          paragraphs: [
            'Paragraph 1',
            'Paragraph 2',
            'Paragraph 3'],
          formats: {
            eBook: { title: 'eBook', link: 'eBook Link 1' },
            paperback: { title: 'Taschenbuch', link: 'Taschenbuch Link 2' },
            hardcover: { title: 'Gebundenes Buch', link: 'Gebundenes Buch Link 3' }
          }
        },
        {
          image: 'assets/img/covers/daemonentraum.jpg',
          paragraphs: [
            'Paragraph 1',
            'Paragraph 2',
            'Paragraph 3'],
          formats: {
            eBook: { title: 'eBook', link: 'eBook Link 1' },
            paperback: { title: 'Taschenbuch', link: 'Taschenbuch Link 2' },
            hardcover: { title: 'Gebundenes Buch', link: 'Gebundenes Buch Link 3' }
          }
        },
        {
          image: 'assets/img/covers/daemonentraum.jpg',
          paragraphs: [
            'Paragraph 1',
            'Paragraph 2',
            'Paragraph 3'],
          formats: {
            eBook: { title: 'eBook', link: 'eBook Link 1' },
            paperback: { title: 'Taschenbuch', link: 'Taschenbuch Link 2' },
            hardcover: { title: 'Gebundenes Buch', link: 'Gebundenes Buch Link 3' }
          }
        },
        {
          image: 'assets/img/covers/daemonentraum.jpg',
          paragraphs: [
            'Paragraph 1',
            'Paragraph 2',
            'Paragraph 3'],
          formats: {
            eBook: { title: 'eBook', link: 'eBook Link 1' },
            paperback: { title: 'Taschenbuch', link: 'Taschenbuch Link 2' },
            hardcover: { title: 'Gebundenes Buch', link: 'Gebundenes Buch Link 3' }
          }
        },
      ]
    },
    {
      section: 'shortStories',
      title: 'Short Stories',
      books: [
        {
          image: 'assets/img/covers/daemonentraum.jpg',
          paragraphs: [
            'Paragraph 1',
            'Paragraph 2',
            'Paragraph 3'],
          formats: {
            eBook: { title: 'eBook', link: 'eBook Link 1' },
            paperback: { title: 'Taschenbuch', link: 'Taschenbuch Link 2' },
            hardcover: { title: 'Gebundenes Buch', link: 'Gebundenes Buch Link 3' }
          }
        },
        {
          image: 'assets/img/covers/daemonentraum.jpg',
          paragraphs: [
            'Paragraph 1',
            'Paragraph 2',
            'Paragraph 3'],
          formats: {
            eBook: { title: 'eBook', link: 'eBook Link 1' },
            paperback: { title: 'Taschenbuch', link: 'Taschenbuch Link 2' },
            hardcover: { title: 'Gebundenes Buch', link: 'Gebundenes Buch Link 3' }
          }
        },
        {
          image: 'assets/img/covers/daemonentraum.jpg',
          paragraphs: [
            'Paragraph 1',
            'Paragraph 2',
            'Paragraph 3'],
          formats: {
            eBook: { title: 'eBook', link: 'eBook Link 1' },
            paperback: { title: 'Taschenbuch', link: 'Taschenbuch Link 2' },
            hardcover: { title: 'Gebundenes Buch', link: 'Gebundenes Buch Link 3' }
          }
        },
        {
          image: 'assets/img/covers/daemonentraum.jpg',
          paragraphs: [
            'Paragraph 1',
            'Paragraph 2',
            'Paragraph 3'],
          formats: {
            eBook: { title: 'eBook', link: 'eBook Link 1' },
            paperback: { title: 'Taschenbuch', link: 'Taschenbuch Link 2' },
            hardcover: { title: 'Gebundenes Buch', link: 'Gebundenes Buch Link 3' }
          }
        },
      ]
    },
  ]

  constructor(private pageService: PageService, public translate: TranslateService) { }


  getBookFormats(book: any): any[] {
    const formats = book.formats || {};
    return Object.keys(formats).map(format => {
      const formatData = formats[format];
      return {
        label: formatData.title,
        link: formatData.link
      };
    });
  }

  scrollToSection(sectionId: string) {
    this.pageService.scrollToSection(sectionId);
  }
}
