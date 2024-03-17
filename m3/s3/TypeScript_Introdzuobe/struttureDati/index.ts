
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

        getStudente(): string {
            return `${this.nome}  ${this.cognome}`;
        }
    }
}

let nuovoStudnete = new Studente('Mario', 'Rossi');
console.log(nuovoStudnete.getStudente());
