function somma(a?:number, b:number = 0):number{
    if(!a) a = 0;//il controllo dell'if fa un filtro, e mi permette di usare a come se fosse number, e non più number|undefined
    return a + b
}

let risultato = somma(2,3)

//void significa che la funzione non restituisce dati
function saluto():void{
    alert('ciao')
}

function isAdult(anni:number):boolean{
    if(anni >= 18){
        return true
    }

    return false
}

isAdult(2);

function sommaConErrori(a:number, b:number):number|never{
    if(a > 100) throw new Error('Il parametro è troppo alto');

    return a + b;
}


try{

    let x = sommaConErrori(2516, 5)

}catch(error){

    console.log(error);
    
}

//funzione asincrona: una promise contenente una string
async function fnAsincrona():Promise<string>{
    return 'ciao'
}

fnAsincrona().then(res => console.log(res)); 

//funzione che somma o concatena
function sommaConcatenaAS(a:number|string, b:number|string):number|string{
    //(a as any) permette l'utilizzo di a sotto forma di any, permettendo così il concatenamento o la somma con stringhe o numeri
    return (a as any) + b
}


//sovraccarico

function sommaConcatena(a:number, b:number):number
function sommaConcatena(a:string, b:string):string

function sommaConcatena(a:any, b:any):any{
    return a + b
}