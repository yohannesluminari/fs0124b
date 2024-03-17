console.log('ciao sono paulo')

let variabile1 = 23


let variabile2 = 'stefano'

let variabile3 = true

let x:string

// se assegno il tipo di dato non puo essere riassegnato con un tipo di dato diverso 
let y:string = 'EPICODE' 

// se non assegno il tipo di dato volendo posso cambiare l'assegnazione ad un variabile contenente un numero con un altro tipo di dato

console.log(variabile1,variabile2,variabile3);

const sum = function(n1:number , n2:number){
    return n1 + n2
}

console.log(sum(variabile1,23))

//DICHIRAZIONE DI ARRAY
const stringArray:string[] = ['stefano', 'ciao', 'paolo']
stringArray.push('rules')

const anotherStringArray: Array<number> = []
anotherStringArray.push(100)

console.log(stringArray);
console.log(anotherStringArray)

type CustomType = string | number
let StringNumber = CustomType = 50
StringNumber = 'margherita'

console.log(StringNumber)

const person = {
    firstName:'paolo',
    lastName:'morandi',
    skills:['singer, performer, developer']
}

interface HumanBeing {
    firstName: string
    lastName: string
    skills?: string[] //il punto interrogativo indica che il campo e opzionale
}

const person2: HumanBeing = {
    firstName:'marco',
    lastName:'moro',
    skills:['dancer, actor, developer']
}
const person3: HumanBeing = {
    firstName:'luca',
    lastName:'mirko',
}
