// pop up come alert
let anni = prompt('Quanti anni hai'); 
// pop up con un campo sovrascrivibile - deprecata/obsoleta 

if(anni >= 18 && anni <= 120){
    document.write('Sei maggiorenne'); // document.write è deprecato
}else if( anni > 120){ // Se inserisce un numero maggiore di 120
    document.write('Allora sei un mona dillo')
}else{
    document.write('Non sei maggiorenne'); // Se inserisce età minore di 18
    location.href ='https://www.treccani.it/vocabolario/maggiorenne/'
}

console.log(!falase) // ! -  contrario di un output - true
console.log(!true) // false
console.log(!(anni >= 18) );
