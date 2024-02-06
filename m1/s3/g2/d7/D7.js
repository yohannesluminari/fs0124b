/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

str1 = "Claudio";
str2 = "Burlone";

function concatenare(str1, str2) {
  // selezione prime due lettere di str1
  let primiDueCaratteri = str1.substring(0, 2);

  // selezione prime due lettere di str1
  let ultimiTreCaratteri = str2.slice(-3);


  let risultato = primiDueCaratteri + ultimiTreCaratteri;

  return risultato.toUpperCase();
}
console.log('Es 1: ' + concatenare(str1, str2));


/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
function random() {

  const totNumeri = 10;
  const array = [];

  for (let i = 0; i < totNumeri.length; i++) {
    let numCasuale = Math.floor(Math.random() * 101);
    array.push(numCasuale);
  }
  return array;
}
let arrayCas = random();
console.log('Es 2: ' + arrayCas);

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Pari(array) {
  let pari = array.filter((num) => num % 2 === 0)
  return pari;
}

let numPari = Pari(array);
console.log('Es 2: ' + numPari);

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

function sommaArray(array) {

  let somma = 0;

  array.forEach((num) => {
    return somma += num;
  })
}

let arr = [1, 4, 5, 3, 7];
let risultato = sommaArray(arr);
console.log("La somma dell'es 4 è: " + risultato);

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

function sommaArray(array) {
  let somma = array.reduce(function (temp, numero) {
    if (typeof numero === 'number') {
      return temp + numero;
    } else {
      return temp;
    }
  }, 0);
  return somma;
}


let arrN = [1, 2, 3, 4, 5];
let somma = sommaArray(arrN);
console.log("La somma degli elementi dell'es 5 è: " + somma); // Stampa: La somma degli elementi nell'array è: 15

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

function incrementaArray(array, n) {

  const incremento = array.map((num) => num + n)
  return incremento;
}

const n = 10;
let arr2 = incrementaArray(arrN, n);
console.log("Array incrementato di es 6 è: ", arr2);


/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

function lunghezzaStr(arrayStringhe) {
  let lunghezze = arrayStringhe.map((str) => str.length)
  return lunghezze;
}

let ary = ["EPICODE", "is", "great"];
let lunghezza = lunghezzaStr(ary);
console.log("Es 7: " + lunghezza);

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/

function Dispari() {
  let arrayDispari = [];
  for (let i = 1; i <= 99; i += 2) {
    arrayDispari.push(i);
  }
  return arrayDispari;
}

let arrayDispari = Dispari();
console.log("Array di numeri dispari di es 8:", arrayDispari);

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
function FilmPiuVecchio(films) {
  let filmPiuVecchio = " ";
  let annoPiuVecchio = 1000;

  films.forEach((film) => {
    const annoCorrente = parseInt(film.Year);
    if (annoCorrente < annoPiuVecchio) {
      annoPiuVecchio = annoCorrente;
      filmPiuVecchio = film;
    }
  });

  return filmPiuVecchio;
}

const filmPiuVecchio = FilmPiuVecchio(movies);
console.log("Il film più vecchio dell'es 9  è: " + filmPiuVecchio.Title + "del" + filmPiuVecchio.Year);

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
const numeroFilm = (movies) => {
  return movies.length;
}

const numFilm = numeroFilm(movies);
console.log("Il numero di film di es 10 è:", numFilm);


/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
const TitoliFilm = (movies) => {
  return movies.map((film) => film.Title);
}

const titoliFilm = TitoliFilm(movies);
console.log("Titoli dei film di es 11:" + titoliFilm);


/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

function FilmMillennioCorrente(movies) {
  const oggi = new Date(); // data corrente
  const annoCorrente = oggi.getFullYear();  // l'anno corrente

  movies.filter((movie) => {
    const annoFilm = parseInt(movies.Year);
    return annoFilm <= annoCorrente && annoFilm > 2000;
  });
}

const film = FilmMillennioCorrente(movies);
console.log("Film usciti nel millennio corrente di es 12: " + film);

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

function sommaAnni(movies) {
  return movies.reduce((temp, film) => {
    const annoProduzione = parseInt(film.Year);
    return temp + annoProduzione;
  }, 0);
}

const totaleAnni = sommaAnni(movies);
console.log("Somma di tutti gli anni di produzione dei film di es 13 è :" + totaleAnni);

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

function trovaFilm(movies, imdbID) {
  return movies.find((film) => film.imdbID === imdbID);
}

const imdbIDaCercare = 'tt4154796';
const filmTrovato = trovaFilm(movies, imdbIDaCercare);
if (filmTrovato) {
  console.log("Film trovato:" + filmTrovato.Title);
} else {
  console.log("Errore nessun film esistente:" + imdbIDaCercare);
}

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/
function trovaIndice (movies, anno)  {
  return movies.findIndex((film) => parseInt(film.Year) === anno);
}


const annoDaCercare = 20022;
const indiceFilm = trovaIndice(movies , annoDaCercare);

if (indiceFilm !== -1) {
  console.log("Indice del primo film uscito nel" + annoDaCercare, "è:" + indiceFilm);
} else {
  console.log("Errore nessun film esistente nel " + annoDaCercare);
}
