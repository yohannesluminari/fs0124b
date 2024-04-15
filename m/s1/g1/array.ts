let array:[] = []//attenzione, in questo caso è accettato come valore solo un array vuoto
let arrayStringhe:string[] = ['a','b']
let arrayNumeri:number[] = [0,1]
let arrayBooleano:boolean[] = [true,false]

let arrayMisto:(string|number)[] = [4,'parola']//array di stringhe e numeri


//any in pratica spegne la tipizzazione ed i conseguenti errori, rendendo il programma poco solido
//inoltre l'inferenza non funziona più
let variabile:any;

variabile = []
variabile = 6
variabile = new Date();

//inferenza
let now = new Date();
//let now = new Date();

//now = 0//non posso farlo, ts ha assegnato il tipo Date alla variabile now
