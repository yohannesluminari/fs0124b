
//LEZIONE 2
enum Days {
    monday = 1,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday
}
console.log(Days.sunday);

//CLASSI

class Studente {
    nome: string;
    cognome: string;

    constructor(_nome: string, _cognome: string) {
        this.nome = _nome;
        this.cognome = _cognome;
    }
    getStudente(): string {
        return `${this.nome}  ${this.cognome}`;
    }

    private numeroRandom(): number {
        return Math.floor(Math.random()*11)
    }

    somma(num1:number): number {
        return num1 + this.numeroRandom();
    }
}

let nuovoStudente = new Studente('Mario', 'Rossi');
console.log(nuovoStudente.getStudente());

console.log(nuovoStudente.somma(15));

//SOTTOCLASSE

class Utente extends Studente {
    eta: number;

    constructor(_nome: string, _cognome: string, _eta: number) {
        super(_nome, _cognome)
        this.eta = _eta;
    }

    getStudente(): string {
        return `${this.nome} ${this.cognome} di anni ${this.eta}`;
    }
}

let nuovoUtente = new Utente('Luca', 'Rossi', 45);
console.log(nuovoUtente.getStudente());

//RELAZIONI 
class Phone {
    numero: number;
    
    constructor(_numero: number){
        this.numero = _numero;
    }
}

class UtentePhone {
    nome: string;
    cognome: string;
    numeri:Phone[];
    
    constructor(_nome: string, _cognome: string, _numeri: any){
        this.nome = _nome;
        this.cognome = _cognome;
        this.numeri = _numeri;
    }
}
let nuovoUtentePhone = new UtentePhone('Mario', 'Rossi',[29449292 ,674727272, 9834394389]);
console.log(nuovoUtentePhone);

