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
          image: 'assets/img/covers/der-geist-in-brand.jpg',
          paragraphs: [
          '1787 – Heinrich Berlingen, Baron von Satten, braucht einen Erben für seinen Titel und sein Lebenswerk, aber will sich nicht binden. So kommt Niklas von Altenmark, ein siebenjähriger preußischer Krautjunker zu dem ruhelosen älteren Herrn, und dass, obwohl er doch niemals von daheim fort wollte.', 
          'Unter den Fittichen des Barons reist Niklas über Berlin ins vorrevolutionäre Paris, erlebt die letzte Blüte des Rokokos, bevor der Ausbruch der Französischen Revolution sie nach London treibt, und von dort über den halben Kontinent. Er lernt Personen seiner Zeit kennen, von Marie Antoinette zu Danton, von Beau Brummell zur Duchess of Devonshire, vom späteren Zar Alexander I. zu Königin Luise, von Josef Haydn bis zu Ludwig van Beethoven. Die ganze Zeit hängt eine Frage über ihnen: Was treibt den Baron an, und was ist in seiner Jugend wirklich geschehen, so dass er nie sesshaft geworden ist?', 
          'Die Antwort darauf werden Niklas und Colette, die leibliche Tochter des Barons, erst am Ende ihrer eigenen Reise finden.'],
          formats: {
            eBook: { title: 'eBook', link: 'https://mybook.to/DerGeistInBrand' },
            paperback: { title: 'Taschenbuch', link: 'https://www.amazon.de/Geist-Brand-Krautjunker-zwischen-Revolution/dp/3969771099/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1671020802&sr=8-1' },
            hardcover: { title: 'Gebundenes Buch', link: 'https://www.amazon.de/Geist-Brand-Krautjunker-zwischen-Revolution/dp/3969771102/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1671020802&sr=8-1' }
          }
        },
        {
          image: 'assets/img/covers/alsterdiamanten.jpg',
          paragraphs: [
            'Hamburg, 1838 – Sophie Achtmann ist die jüngste, etwas reizlose Tochter einer aufstrebenden Kaufmannsfamilie. Sie kennt die Rolle, die ihre Familie ihr zugedacht hat: Sie muss vorteilhaft heiraten und damit den Credit der Achtmanns mehren, ihrer älteren und schöneren Cousine gleich. Aber Sophie fürchtet, niemals einen Mann zu finden, den ihr Großvater akzeptieren wird. Und sie ist nicht die Einzige, die an der ihr zugedachten Aufgabe verzweifelt: Auch ihre Brüder hadern mit dem Schicksal, jeder auf seine Weise.', 
            'Doch dann taucht ein junger, französischer Abt in Hamburg auf, der für jeden von ihnen immer die richtigen Antworten hat, der stets zur Stelle zu sein scheint, wenn es nottut. Sophie und ihre Brüder freunden sich mit Leander an – nicht ahnend, welche Gründe er wirklich für sein Handeln hat, nicht ahnend, dass sie nur Mittel zum Zweck sind und sein eigentliches Ziel ein ganz anderes Mitglied der Achtmanns …', 
            ],
          formats: {
            eBook: { title: 'eBook', link: 'https://mybook.to/Alsterdiamanten' },
            paperback: { title: 'Taschenbuch', link: 'https://www.amazon.de/dp/3969771129/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=' },
            hardcover: { title: 'Gebundenes Buch', link: 'https://www.amazon.de/dp/3969771226?ref_=pe_3052080_397514860' }
          }
        },
        {
          image: 'assets/img/covers/irrfahrt.jpg',
          paragraphs: [
            'Man schreibt das Jahr 1147. Die Sarazenen haben soeben das christliche Edessa im Orient erobert. Als Antwort darauf macht sich der zweite Kreuzzug aus dem Abend­land auf nach Osten, um den Feind wieder zu zurückzudrängen. Teil dieses Zuges sind die fünfzehnjährige Katharina mit Ehemann und Kindern sowie die Brüder Rudolph und Maximilian.', 
            'Inspiriert vom Erfolg des ersten Kreuzzuges sind sie aufgebrochen, erfüllt von hehren Zielen, Profitgier und dem Glauben an die eigene Unbesiegbarkeit. Aber die Realität schlägt zu. Plötzlich, unvermittelt, stehen Max und Katja alleine da und müssen sich selbst ihren Weg durch ein feindliches Land suchen …', 
            ],
          formats: {
            eBook: { title: 'eBook', link: 'https://mybook.to/IrrfahrtInsGelobteLand' },
            paperback: { title: 'Taschenbuch', link: 'https://www.amazon.de/Irrfahrt-ins-Gelobte-Land-Geschichte/dp/3969770076/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1603695817&sr=1-1' },
            hardcover: { title: 'Gebundenes Buch', link: 'https://www.amazon.de/dp/3969770998?ref_=pe_3052080_397514860' }
          }
        },
         {
          image: 'assets/img/covers/die-masken-von-florenz.jpg',
          paragraphs: [
            'Gianni ist erst zwölf und damit das unbedeutendste Mitglied einer Florentiner Kaufmannsfamilie zu Zeiten der Medici; doch sein Leben scheint bereits klar vorgezeichnet.', 
            'In der Frühzeit der italienischen Renaissance ist die Zukunft aber alles andere als gewiss. Der Verlust seiner Verlobten ist dabei nur eines der Dinge, die nicht nach Plan verlaufen. Giannis Weg führt ihn über die Anfänge der Buchdruckkunst, die Werkstätten der Bildhauer und Künstler bis hin zur Politik Lorenzo des Prächtigen. Dabei verfolgt ihn immer dasselbe Geheimnis: Was ist seiner jungen Braut zugestoßen, die einst spurlos im Karneval verschwand?', 
            ],
          formats: {
            eBook: { title: 'eBook', link: 'https://mybook.to/DieMaskenvonFlorenz' },
            paperback: { title: 'Taschenbuch', link: 'https://www.amazon.de/dp/3969770092/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1603695555&sr=1-1' },
            hardcover: { title: 'Gebundenes Buch', link: 'https://www.amazon.de/dp/3969770947?ref_=pe_3052080_397514860' }
          }
        },
        // Weitere Bücher für die historische Sektion
      ]
    },
    {
      section: 'urbanFantasy',
      title: 'Urban Fantasy',
      books: [
        {
          image: 'assets/img/covers/Von-Elfen-und-Woelfen-kindle-1.jpg',
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
