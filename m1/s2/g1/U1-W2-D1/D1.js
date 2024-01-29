/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come 
 se volessi farlicomprendere a un bambino.

      CI SONO VARI TIPI DI DATATYPE:

      STRING - è un tipo di dato (stringa) che indica una sequenza di cartteri compresi tra apici che sono posso essere lettere,numeri,simboli o spazi vuoti

      NUMERO - è un tipo di dato numerico intero o decimale

      BOOLEAN - tipo di dato booleano che può assumere solo due valori true - false

      UNDEFINED - segnala che qualcosa non è ben definto in una varaibile a cui ho assegnato un valore

      NULL - dato/valore assegnato ad una variabile a cui non ho ancora definito un valore
*/




/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa. 
*/

let myName = "Yohannes";


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
console.log(12 + 20);


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;



/* ESERCIZIO 5
  1) Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  2) Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

//1
myName = "Luminari";
/*2
const possibile = "possibile";
possibile = "impossibile";
*/



/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
console.log(4 - x);


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";
console.log(name1 == name2);

//EXTRA
name2 = name2.toLocaleLowerCase();
console.log(name1 == name2);

