/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
function area (l1, l2) {
    return l1 * l2;
}
console.log("Esercizio 1");
console.log("L'area del rettangolo è: " + area(3,7));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
function crazySum (n1, n2) {
    if( n1 === n2 ){
        return (n1 + n2) *3
    }else{
        return n1 + n2;
    }
}
console.log("Esercizio 2");
console.log("Il risultato è: " + crazySum(2,7));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
let n2 = 400 ;
function crazyDiff (n2) {
    
    if( n2 > 19){
        return Math.abs(19 - n2)*3;
    }else return Math.abs(19 - n2);
}
console.log("Esercizio 3");
console.log("Il risultato è: " + crazyDiff(n2,19));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary (n) {
    
    if((n >= 20 && n <= 100) || n == 400) { // pensavo amche 20 incluso..se non fosse incluso nella consegna basta togliere l'uguale n2>20
        return true;
    }else{
        return false;
    }
}
console.log("Esercizio 4");
console.log("Il risultato è: " + boundary(10));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify (string) {
    
    if(string.startsWith("EPICODE")) { 
        return string;
    }else{
        return "EPICODE " + string;
    }
}
console.log("Esercizio 5");
console.log(epify("EPICODE is the way"));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7 (n) {
    if(n % 3 == 0 || n % 7 == 0) return n + " è un multiplo di 3 e 7";
    else return n + " non è un multiplo di 3 e 7";
}
console.log("Esercizio 6");
console.log(check3and7(21));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(string){
    let splitReverse = "";
    splitReverse = string.split("").reverse().join("");
    return splitReverse;
}
console.log("Esercizio 7");
console.log(reverseString("EPICODE"));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
function upperFirst(string){
    let splitReverse = string.split(" ");
    
    
}
console.log("Esercizio 8");
console.log(upperFirst("epicode is the way"));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(string){
    let cut = string.slice(1, string.length - 1);
    return cut;
}
console.log("Esercizio 9");
console.log(cutString(" Ciao come stai? "));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
const arrayNumeri =[];
function giveMeRandom(n){

    for( let i = 0;  i < n; i++){
        arrayNumeri.push(Math.floor(Math.random()* 11))
    }
    return arrayNumeri;
}
console.log("Esercizio 10");
console.log(giveMeRandom(10));
/* SCRIVI QUI LA TUA RISPOSTA */
