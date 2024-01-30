/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;
let y = 4;
if ( x > y){

  console.log(x + " è il numero maggiore");
}else if ( x === y ){
  console.log(x + " è " +  y + " sono numeri uguali");
} else {
  console.log(y + " è il numero maggiore");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

  // let a = prompt("Inserisci un numero diverso da 5");
  // if ( a !== 5){
  //   console.log("not equal");
  // }



/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
/* SCRIVI QUI LA TUA RISPOSTA */

// let b = prompt("Inserisci un numero");
// if ( b % 5 == 0){
//   console.log("divisibile");
// }


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let n1 = 12;
let n2 = 4;

if ( n1 == 8 || n2 == 8 || n1 -  n2 == 8 || n2 - n1 == 8 || n1 + n2 == 8){
  console.log("bho non so cosa scrivere perchè non hai detto nulla ma nel dubbio si sei entrato dentro al ciclo")
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 34;
const spedizione = 10;
if( totalShoppingCart > 50) {
  totalShoppingCart = totalShoppingCart
  console.log("hai speso: " + totalShoppingCart);
}else{
  totalShoppingCart = totalShoppingCart + spedizione
  console.log("hai speso: " + totalShoppingCart );
}


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

const sconto = 0.2;
if( totalShoppingCart > 50) {
  totalShoppingCart -= totalShoppingCart * sconto;
  console.log("hai speso: " + totalShoppingCart);
}else{
  totalShoppingCart =[totalShoppingCart - totalShoppingCart * sconto] + spedizione;
  console.log("hai speso: " + totalShoppingCart );
}


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

const numero1 = 333;
const numero2 = 12;
const numero3 = 2;
const decrescente = ordinaDecrescente(numero1, numero2, numero3);
function ordinaDecrescente(num1, num2, num3) {
  let numeri = [num1, num2, num3];
  numeri.sort(function(a, b) {
      return b - a;
  });
  return numeri;
}
console.log("Numeri ordinati in ordine decrescente:", decrescente);



/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
let number = 5;
console.log("il tipo di dato è un " + typeof number);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let pari = 4;
if ( pari % 2 == 0){
  console.log(pari+ ": è un numero pari " );
}else{
  console.log(pari+ ": è un numero dispari " );
}

/* SCRIVI QUI LA TUA RISPOSTA */

// ESERCIZIO 10
// Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 10;
  if (val < 10 && val >= 10) {
      console.log("Meno di 10");
    } else if (val < 5 ) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.professione = "Ingegnere";
console.log(me);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
delete me.lastName;
console.log(me);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
delete me.skills;
console.log(me);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let array = [];
for(let i = 1;i <=10;i++){
  array[i]= i;
}
console.log(array)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
let length = array.length;
array[length - 1] = 100;
console.log(array)

/* SCRIVI QUI LA TUA RISPOSTA */
