import { Component, OnInit } from '@angular/core';
import { PageService } from '../shared/services/page-service/page.service';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-germanbooks',
  templateUrl: './germanbooks.component.html',
  styleUrls: ['./germanbooks.component.scss']
})


export class GermanbooksComponent implements OnInit {

  germanBooks: any;

  constructor(private pageService: PageService, public translate: TranslateService, private http: HttpClient) { }

  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {
    try {
      const data = await firstValueFrom(this.http.get<any>('assets/jsons/germanbooks.json'));
      this.germanBooks = data.germanBooks;
    } catch (error) {
      console.error('Fehler beim Laden der Daten:', error);
    }
  }
  
  getBookFormats(book: any): any[] {
    if (this.germanBooks) {
      const formats = book.formats || {};
      return Object.keys(formats).map(format => {
        const formatData = formats[format];
        return {
          label: formatData.title,
          link: formatData.link
        };
      });
    } else {
      return [];
    }
  }

  scrollToSection(sectionId: string) {
    this.pageService.scrollToSection(sectionId);
  }

  getBookFormats2(book: any): any[] {
    const formats = book.formats || {};
    //assigns the object of the book.formats if it exists, otherwise empty object
    return Object.keys(formats).map(format => {
      //returns an array of the keys of the object format. 
      //map iterates through this array and transforms each element, so that the transformed object is returned in the end
      const formatData = formats[format];
      console.log('2 ',this.germanBooks)
      // assigns content at the key 'format' out of book.formats. format is the index of the function
      return { //makes a new object for each Element in map with the attributes below
        label: formatData.title,
        link: formatData.link
      };
    });
    
  }//returns a list of objects with infos for title and link


  germanBooks2 = [
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
          image: 'assets/img/covers/von-elfen-und-woelfen.jpg',
          paragraphs: [
            'Lucie Martin ist neu – das ist ihr nicht unbekannt. Normalerweise hat  sie keine Probleme, Freunde zu finden. Aber bei den Kindern des Nachbarhauses stößt sie auf eine echte Herausforderung. Dabei sind diese  ungewöhnlich genug: eine Tochter mit Aggressionsproblemen, ein Haufen  Pflegekinder, der Älteste von ihnen ein verschlossener Junge mit  schlohweißen Haaren, die sich nicht färben lassen. Lucie ist wider  Willen fasziniert von Noel Tyll. Da ist noch etwas anders an ihm, etwas,  das seine Pflegeschwester Cara alle Geschütze ausfahren lässt, etwas,  das über seine Haare und seine seltsam betörende Stimme hinausgeht.',
            'Aber  als Lucie schließlich herausfindet, was Noels Geheimnis ist, erfährt  sie mehr, als sie wissen wollte – und auch mehr über ihre eigene Familie  und ihre eigenen Wurzeln …',
            '"Von Elfen und Wölfen" ist der erste Teil einer Trilogie, kann aber auch als Stand-alone gelesen werden.'],
          formats: {
            eBook: { title: 'eBook', link: 'https://mybook.to/VonElfenUndWoelfen' },
            paperback: { title: 'Taschenbuch', link: 'https://amzn.eu/d/c6QZTSH' },
            hardcover: { title: 'Gebundenes Buch', link: 'https://amzn.eu/d/02iM6d7' }
          }
        },
        {
          image: 'assets/img/covers/hexen-mittendrin-im-mix.jpg',
          paragraphs: [
            'Bina Birnbaum ist die stärkste Hexe ihrer Generation - nur leider weiß  das kaum einer. Umso begeisterter stürzt sich Bina auf ihren neuesten  Auftrag: das Heben des Fluches, mit dem die benachbarten Werwölfe, die  Martins, belegt sind. Ihr zur Seite steht der Waldelf Cianán, der selber  gerade erst die Welt außerhalb seines Waldes entdeckt.',
            'Allerdings  stellt sich der Auftrag als nicht so einfach wie gedacht heraus, und  weckt zudem Geister der Vergangenheit, die Bina und ihre Freunde bald in  ziemliche Bedrängnis bringen...',
            '"Hexen mittendrin im Mix" ist der zweite Teil der Trilogie "Von Elfen und Wölfen".'],
          formats: {
            eBook: { title: 'eBook', link: 'https://mybook.to/HexenMittendrinImMix' },
            paperback: { title: 'Taschenbuch', link: 'https://amzn.eu/d/0uT0RMM' },
            hardcover: { title: 'Gebundenes Buch', link: 'https://amzn.eu/d/aRLvy6Z' }
          }
        },
        {
          image: 'assets/img/covers/in-namen-der-menschen.jpg',
          paragraphs: [
            'Lena Meyer hat genug von Elfen und Wölfen und allem, was dazu gehört.  Sie will studieren, nach ihrer verkorksten Jugend als Essgestörte  endlich normal sein, und ihrem Pflegebruder Noel nur ihren Bruder sehen,  nicht den geheimen Prinzen der Elfen.',
            'Aber dann stößt sie in ihrer  WG auf ein gefährliches Buch, ihre Mitbewohner entpuppen sich nicht alle  als menschlich, und plötzlich ist Lena sich nicht einmal mehr sicher,  inwieweit sie noch sie selber ist.',
            'Ernsthaft - normal sein  bedeutet nicht, eine mystische Maid mit einem Vampir als Ritter zu  werden. Und die auf die Geister der Vergangenheit - sowohl ihre eigenen  als auch die ihres Vampirs - hätte sie wirklich gut verzichten können!',
            '"Im Namen der Menschen" ist der dritte Teil der Trilogie "Von Elfen und Wölfen".'],
          formats: {
            eBook: { title: 'eBook', link: 'https://mybook.to/ImNamenDerMenschen' },
            paperback: { title: 'Taschenbuch', link: 'https://amzn.eu/d/8aAPGQ2' },
            hardcover: { title: 'Gebundenes Buch', link: 'https://amzn.eu/d/4rhpKC2' }
          }
        },
        {
          image: 'assets/img/covers/daemonenritt.jpg',
          paragraphs: [
            'Wer hätte gedacht, dass es Dämonen wirklich gibt? Und nicht nur sie – auch Dämonenjäger?',
            'Daniel  begegnet gleich dreien von ihnen, als er sich auf der Suche nach seinem  Bruder mit einem Dämon einlässt. Mit den Jägern, so hofft er, hat er  eine größere Chance, Zach aufzuspüren.',
            'Aber diese Entscheidung zieht  ihn zunehmend tiefer in einen alten Konflikt zwischen den verfeindeten  Spezies. Was ist geschehen, dass die Dämonen ihre jahrtausendalte  Deckung überhaupt aufgaben? Welche Rolle hat dabei die Jägerin Miriam  gespielt, die von ihren Mitstreitern mit extremer Verachtung behandelt  wird – und welche Rolle hatte ihr einstiger Partner Flo?',
            'Die  Suche nach Zach führt Daniel und die Jäger nicht nur in die  Vergangenheit, sondern quer über zwei Kontinente – und an ihrem Ende  steht etwas ganz anderes, als sie alle erwartet hatten …',
            '"Dämonenritt" ist der erste Teil der abgeschlossenen Fantasy-Trilogy "Die Kinder der Engel".'],
          formats: {
            eBook: { title: 'eBook', link: 'https://mybook.to/Daemonenritt' },
            paperback: { title: 'Taschenbuch', link: 'https://amzn.eu/d/3sEodmI' },
            hardcover: { title: 'Gebundenes Buch', link: 'https://amzn.eu/d/5oFwTdi' }
          }
        },
        {
          image: 'assets/img/covers/daemonensprung.jpg',
          paragraphs: [
            'Die Reise der Kinder der Engel geht weiter…',
            'Flo, Miriam und  Daniel haben es getan – sie haben einen der verlorenen Splitter in das  Herz der Engel eingesetzt, wie die Prophezeiungen es besagten. Aber dies  hat ungeahnte Konsequenzen, und zwar vor allem für Daniel, der damit  als erster Mensch der ungebremsten Kraft der Wandler ausgesetzt war.',
            'Was  wird aus einem Menschen, der auf einmal Energie manipulieren kann? Wie  reagiert der Rat der Jäger auf die Rebellion seiner Verheißenen? Und was  wollen die Dämonen? Oder sollte man sie besser Schattenwandler nennen?',
            'Flo, Miriam und Daniel fangen zunehmend an, alte Legenden herauszufordern …',
            '"Dämonenspung" ist der zweite Teil der abgeschlossenen Fantasy-Trilogy "Die Kinder der Engel".'],
          formats: {
            eBook: { title: 'eBook', link: 'https://mybook.to/Daemonensprung' },
            paperback: { title: 'Taschenbuch', link: 'https://amzn.eu/d/7b7yTck' },
            hardcover: { title: 'Gebundenes Buch', link: 'https://amzn.eu/d/eC7NtO1' }
          }
        },
        {
          image: 'assets/img/covers/daemonentraum.jpg',
          paragraphs: [
            'Die Reise der Kinder der Engel erreicht ihren Höhepunkt …',
            'Flo,  Miriam und Daniel tun ihr Bestes, die Welt vor einem Krieg der Wandler  zu bewahren, den diese vermutlich nicht überstehen würde. Doch plötzlich  taucht eine neue Mitspielerin auf und verlangt ihre Unterstützung.',
            'Wer  ist diese Bell, und warum ist sie gekommen? Ist es überhaupt möglich,  den Krieg aufzuhalten? Und falls nicht – gelingt es, zumindest die Welt  der Menschen vor der Vernichtung zu schützen?',
            'Flo, Miriam und Daniel sehen sich immer mehr genötigt, am Ende doch noch das ultimative Opfer bringen zu müssen …',
            '"Dämonentraum" ist der letzte Teil der abgeschlossenen Fantasy-Trilogy "Die Kinder der Engel".',
            'Paragraph 3'],
          formats: {
            eBook: { title: 'eBook', link: 'https://mybook.to/Daemonentraum' },
            paperback: { title: 'Taschenbuch', link: 'https://amzn.eu/d/aNPCZ62' },
            hardcover: { title: 'Gebundenes Buch', link: 'https://amzn.eu/d/3SwNOwD' }
          }
        },
        // Weitere Bücher für die Fantasy-Sektion
      ]
    },
    {
      section: 'highFantasy',
      title: 'High Fantasy',
      books: [
        {
          image: 'assets/img/covers/elfenweg.jpg',
          paragraphs: [
            'Kommt mit in die fantastische Welt Thurán ...',
            'Jann Deren ist dreizehn Jahre alt, als er bei einem Brand seine gesamte Familie verliert. Um den Erinnerungen zu entkommen, hängt er sich an die Fersen seiner Retterin, der Halbelfe Acanà von Anabellánien. Acanà nimmt ihn nur widerwillig mit, denn sie wird von einem ganz persönlichen Ziel getrieben, von dem sie sich nicht abbringen lassen will. In ihr steckt mehr, als man auf den ersten Blick vermutet – und Jann wird dies bald herausfinden.',
            '„Elfenweg“ ist der erste Band der abgeschlossenen Fantasy-Trilogie „Die Sänger von Thurán“.'],
          formats: {
            eBook: { title: 'eBook', link: 'https://mybook.to/Elfenweg' },
            paperback: { title: 'Taschenbuch', link: 'https://amzn.eu/d/izEWolF' },
            hardcover: { title: 'Gebundenes Buch', link: 'https://amzn.eu/d/8SDdtB7' }
          }
        },
        {
          image: 'assets/img/covers/sumpfzauber.jpg',
          paragraphs: [
            'Kommt mit in die fantastische Welt Thurán ...',
            'Anabellánien ist befreit, und Acanà hat mit Janns Hilfe einen Weg gefunden, ihre Aufgaben zu vereinen. Alles könnte in Ordnung sein – doch da wird Jann entführt. Ein neuer Auftrag wartet auf ihn: Diesmal soll er die Sumpfhexe Irionne über Thurán eskortieren, um deren verschwundene Schwester Ayrelie zu retten. Jann und Acanà hatten unwissentlich die Entführung ermöglicht, als sie den Kupferstern bargen. Damit war Ayrelie ihres Schutzes beraubt – und nun könnten ihre Geheimnisse in den falschen Händen ganz Thurán gefährden…',
            '"Sumpfzauber" ist der zweite Band der abgeschlossenen Fantasy-Trilogie „Die Sänger von Thurán“.'],
          formats: {
            eBook: { title: 'eBook', link: 'https://mybook.to/Sumpfzauber' },
            paperback: { title: 'Taschenbuch', link: 'https://www.amazon.de/dp/3969770033?ref_=pe_3052080_397514860' },
            hardcover: { title: 'Gebundenes Buch', link: 'https://www.amazon.de/dp/3969771145?ref_=pe_3052080_397514860' }
          }
        },
        {
          image: 'assets/img/covers/weltenringen.jpg',
          paragraphs: [
            'Kommt mit in die fantastische Welt Thurán ...',
            'Nach Janns Rückkehr zu Acanà ist ihnen bewusst, dass Thurán sich einer gefährlichen Bedrohung ausgesetzt sieht, die es mit allen Mitteln zu bekämpfen gilt. Um ein notwendiges Bündnis zu erkaufen, muss Jann jedoch zunächst das größte Opfer selber bringen. Jahre später brechen seine Kinder Nycas und Mia mit dem Ziel auf, ihn zurückzuholen, und damit wird eine neue Kette von Ereignissen in Gang gesetzt, die zu dem bisher gefährlichsten Wagnis führen. Es bedarf eines ungewöhnlichen Schrittes, um mehr über den Feind zu erfahren: Jann und Nycas wechseln die Welten …',
            '„Weltenringen“ ist der letzte Band der abgeschlossenen Fantasy-Trilogie „Die Sänger von Thurán“.'],
          formats: {
            eBook: { title: 'eBook', link: 'https://mybook.to/Weltenringen' },
            paperback: { title: 'Taschenbuch', link: 'https://www.amazon.de/dp/396977005X?ref_=pe_3052080_397514860' },
            hardcover: { title: 'Gebundenes Buch', link: 'https://www.amazon.de/dp/3969771153?ref_=pe_3052080_397514860' }
          }
        },
      ]
    },
    {
      section: 'spy',
      title: 'Spionage',
      books: [
        {
          image: 'assets/img/covers/unheilige mittel.jpg',
          paragraphs: [
            'Ein Junge, ausgebildet zum Spion und Dieb ...',
            'Ein hinkendes Mädchen, das keine Barmherzigkeit kennt ...',
            'Ein ehemaliger Leibwächter auf der Suche nach einem Sinn ...',
            'Als Logan Svensson dem geheimnisvollen TISCH als neuester Rekrut beitritt, kann er sein Misstrauen nur schwer abschütteln. Eine geheime Organisation, die für das Allgemeinwohl arbeitet und nachhaltige Mittel nutzt? Die gegen Sklavenhandel vorgeht und gestohlene Waren unerkannt an die Besitzer zurückgibt? Das klingt zu schön, um wahr zu sein. Sein Argwohn wächst, als er Jack und Ada kennenlernt, die Wunderkinder, die in der Organisation aufgewachsen sind – auch wenn beide bei seinen Fragen mit die Augen verdrehen.',
            'Doch dann wird der TISCH angegriffen, und plötzlich steht alles auf den Kopf.',
            'Wer hat es auf sie abgesehen – und warum?',
            'Und welches Spiel spielen die Leute vom TISCH wirklich?'],
          formats: {
            eBook: { title: 'eBook', link: 'https://mybook.to/UnheiligeMittel' },
            paperback: { title: 'Taschenbuch', link: 'https://www.amazon.de/dp/3969770963/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=' },
            hardcover: { title: 'Gebundenes Buch', link: 'https://www.amazon.de/dp/3969771005?ref_=pe_3052080_397514860' }
          }
        },
        {
          image: 'assets/img/covers/hehre zwecke.jpg',
          paragraphs: [
            'Erschüttert von den Ereignissen von Samos und des anschließenden Medienrummels halten sich Jack, Ada und Logan versteckt, verzweifelt bemüht, die schockierende Wahrheit zu verarbeiten. Neue Informationen helfen ihnen dabei gegen die Jagd auf sie.',
            'Aber dann fangen die Beteiligten des Projekts Culter an, wie die Fliegen zu sterben.',
            'Sie sind nicht die einzigen dieser Ergebnisse, wie es scheint – und doch: Wer ist für die Todesfälle verantwortlich? Und warum?',
            'Und werden sie die nächsten sein?',
            'Jack, Ada und Logan bringen sich zurück ins Spiel und nehmen es mit dem Tisch, den Söhnen Gottes und dem mysteriösen dritten Kind auf, entschlossen, der Sache auf den Grund zu gehen.'],
          formats: {
            eBook: { title: 'eBook', link: 'https://mybook.to/HehreZwecke ' },
            paperback: { title: 'Taschenbuch', link: 'https://www.amazon.de/dp/396977098X/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=' },
            hardcover: { title: 'Gebundenes Buch', link: 'https://www.amazon.de/dp/3969771013?ref_=pe_3052080_397514860' }
          }
        },
      ]
    },
    {
      section: 'loveStories',
      title: 'Liebesromane',
      books: [
        {
          image: 'assets/img/covers/ertolia.jpg',
          paragraphs: [
            'David ist der Ranghöchste unter den Ertolianern. Er wird König, sobald der Zyklus vollendet ist – alle wissen das.',
            'Julia, seine Halbcousine, ist zu seiner Königin bestimmt, denn sie ist die Zweithöchste, in ihrem Rang nur von David übertroffen. Auch dies wissen alle, inklusive Davids bestem Freund Eduard, der mehr oder minder heimlich in Julia verliebt ist.',
            'Aber dann kommt Sissy von Tarmaran an den Hof, das exotische Mündel eines Botschafters, unvertraut mit ihren Gebräuchen, unvoreingenommen und erfrischend in ihrer Unbedarftheit. Und plötzlich wird all das, was so gewiss und vorgezeichnet schien, von Ertolias zukünftigem König auf den Kopf gestellt …',
            'Ein Stern für Ertolia ist ein Märchen mit einem Twist und spielt in einer fiktiven Welt ähnlich des vorindustriellen Europas, jedoch mit deutlich anderen sozialen Regeln.'],
          formats: {
            eBook: { title: 'eBook', link: 'https://mybook.to/Ertolia  ' },
            paperback: { title: 'Taschenbuch', link: 'https://www.amazon.de/Ein-Stern-Ertolia-Lotte-Liesbeth/dp/3969770777/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1651397391&sr=8-1' },
            hardcover: { title: 'Gebundenes Buch', link: 'https://www.amazon.de/Ein-Stern-Ertolia-Lotte-Liesbeth/dp/3969771293/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1651397391&sr=8-1' }
          }
        },
        {
          image: 'assets/img/covers/lilys-stil.jpg',
          paragraphs: [
            'Lily und Mark sind Stiefgeschwister, beides Sprösslinge ehrgeiziger Alleinerziehender, die miteinander ein zweites Glück gefunden haben. Eigentlich mögen Lily und Mark sich nicht besonders – aber als eine Verkettung von Umständen dazu führt, dass sie einander doch sehr viel näherkommen als von ihren Eltern geplant, löst dies eine wahre Kaskade an Probleme aus.',
            'Immerhin – Stiefgeschwister sind doch so etwas wie Geschwister, oder?',
          ],
          formats: {
            eBook: { title: 'eBook', link: 'https://mybook.to/LilysStil' },
            paperback: { title: 'Taschenbuch', link: 'https://www.amazon.de/Lilys-Stil-Eine-Erz%C3%A4hlung-Erotik/dp/3969770270/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=' },
            hardcover: { title: 'Gebundenes Buch', link: 'https://www.amazon.de/Lilys-Stil-Eine-Erz%C3%A4hlung-Erotik/dp/3969771242/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=&sr=' }
          }
        },
      ]
    },
    {
      section: 'shortStories',
      title: 'Kurzgeschichten und Novellen',
      books: [
        {
          image: 'assets/img/covers/tanz-mit-dem-wind.jpg',
          paragraphs: [
            'Sie ist eine Tänzerin auf Marktplätzen, Festen und Feiern, Teil einer  kleinen Gauklertruppe. Tessa tanzt zu allem, was Jo, der Fiedler,  spielen kann. Aber das Leben auf der Straße ist nicht leicht, vor allem,  wenn man viel verloren hat und sich vor weiteren Enttäuschungen  schützen will ...',
            'Kurzgeschichte, 32 Seiten',
          ],
          formats: {
            eBook: { title: 'eBook', link: 'https://www.amazon.de/dp/B08JLSKZ5M' },
            paperback: { title: 'Taschenbuch', link: 'https://www.amazon.de/Tanz-mit-dem-Wind-Kurzgeschichte/dp/3969770424/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=' },
            hardcover: { title: 'Gebundenes Buch', link: 'https://www.amazon.de/Tanz-mit-dem-Wind-Kurzgeschichte/dp/3969771285/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=&sr=' }
          }
        },
        {
          image: 'assets/img/covers/LebensAbschnitt.jpg',
          paragraphs: [
            'Eine Zeitreisende zieht durch die Geschichte der Menschheit, begleitet vom toten Alexander dem Großen. Ihr gemeinsamer Weg führt sie von den Ursprüngen des sichtbaren Lebens bis in die Neuzeit – beobachtend, manchmal auch teilhabend und dabei Antworten suchend auf Fragen, die sie sich selber gar nicht stellen mag:',
            'Wer ist sie, und warum ist sie weder an Zeit noch Raum gebunden?',
            'Novelle, 128 Normseiten'],
          formats: {
            eBook: { title: 'eBook', link: 'https://www.amazon.de/LebensAbschnitt-Eine-Reise-durch-Zeit-ebook/dp/B08GJZ8TF5/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1598258693&sr=8-13' },
            paperback: { title: 'Taschenbuch', link: 'https://www.amazon.de/LebensAbschnitt-Eine-Reise-durch-Zeit/dp/3969770416/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1598258693&sr=8-13' },
            hardcover: { title: 'Gebundenes Buch', link: 'https://www.amazon.de/LebensAbschnitt-Eine-Reise-durch-Zeit/dp/3969771277/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1598258693&sr=8-13' }
          }
        },
      ]
    },
    // Weitere Sektionen, wenn benötigt
  ];
}
