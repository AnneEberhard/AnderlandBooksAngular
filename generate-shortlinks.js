const fs = require('fs');
const path = require('path');


function loadJSON(filename) {
  const filePath = path.join(__dirname, filename);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Datei nicht gefunden: ${filePath}`);
    process.exit(1);
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

const englishBooks = loadJSON('src/assets/jsons/englishbooks.json');
const germanBooks = loadJSON('src/assets/jsons/germanbooks.json');
const childrenBooks = loadJSON('src/assets/jsons/childrensbooks.json');

const booksData = [
  { category: 'english-books', books: englishBooks.englishBooks },
  { category: 'german-books', books: germanBooks.germanBooks },
  { category: 'childrens-books', books: childrenBooks.childrensBooks }
];

const shortlinks = {}; // Kein TypeScript, reines JavaScript

booksData.forEach(({ category, books }) => {
  books.forEach(section => {
    section.books.forEach(book => {
      let shortId = (book.shortId ?? book.id.match(/[a-zA-Z]+/g)?.[0]?.toLowerCase()) || book.id;
      shortlinks[shortId] = `/${category}/#${book.id}`;
    });
  });
});

// Pfad für die Ausgabe
const outputPath = path.join(__dirname, 'src/assets/jsons/shortlinks.json');
fs.writeFileSync(outputPath, JSON.stringify(shortlinks, null, 2));

console.log('✅ Shortlinks wurden erfolgreich generiert.');
