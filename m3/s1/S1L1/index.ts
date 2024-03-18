console.log('ciao')

interface Phone {
    credito:number;
    numeroChiamate:number;

    get numero404(): number
    get getNumeroChiamate(): number
    ricarica (totaleRicarica:number): void 
    chiamata(minutiChiamata: number): void
    azzeraChiamate (): void
}

class User implements Phone {
    nome: string
    cognome: string
    credito: number = 20
    numeroChiamate: number = 0

    constructor(_nome: string, _cognome: string) {
        this.nome = _nome
        this.cognome = _cognome
    }

    get numero404() {
        return this.credito
    }
    get getNumeroChiamate() {
        return this.numeroChiamate
    }
    ricarica (totaleRicarica:number): void {
        this.credito += totaleRicarica
    }

    chiamata (minutiChiamata:number): void {
        if(this.credito < (minutiChiamata * 0.5)){ // 0.5 euro al minuto
            return console.log('Credito insufficente per continuare con la chiamata');
        }
        this.credito -= (minutiChiamata * 0.5)
        this.numeroChiamate += 1
    }
    azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }
}

const user1 = new User("mattia", "ghepardo")

console.log(user1)
console.log(user1.numero404)
console.log(user1.getNumeroChiamate)

console.log(user1.ricarica(10)) 
user1.ricarica(90);
user1.chiamata(10)
user1.getNumeroChiamate 
user1.chiamata(100) 
user1.getNumeroChiamate
user1.getNumeroChiamate 