//il ? significa prop facoltativa
let obj:{nome:string, cognome:string} = {
    nome:'Mario',
    cognome:'Rossi',
}

console.log(obj.nome)


class Persona{
    nome:string = ''
    cognome:string = ''
}

interface iPersona{
    nome:string
    cognome:string
}

type tipoPersona = {nome:string, cognome:string};

let objPersona:Persona = {
    nome:'Mario',
    cognome:'Rossi',
}

let objPersona2:iPersona = {
    nome:'Mario',
    cognome:'Rossi',
}

let objPersona3:tipoPersona = {
    nome:'Mario',
    cognome:'Rossi',
}