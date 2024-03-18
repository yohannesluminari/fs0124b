"use strict";
console.log('ciao');
class User {
    constructor(_nome, _cognome) {
        this.credito = 20;
        this.numeroChiamate = 0;
        this.nome = _nome;
        this.cognome = _cognome;
    }
    get numero404() {
        return this.credito;
    }
    get getNumeroChiamate() {
        return this.numeroChiamate;
    }
    ricarica(totaleRicarica) {
        this.credito += totaleRicarica;
    }
    chiamata(minutiChiamata) {
        if (this.credito < (minutiChiamata * 0.5)) { // 0.5 euro al minuto
            return console.log('Credito insufficente per continuare con la chiamata');
        }
        this.credito -= (minutiChiamata * 0.5);
        this.numeroChiamate += 1;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
const user1 = new User("mattia", "ghepardo");
console.log(user1);
console.log(user1.numero404);
console.log(user1.getNumeroChiamate);
console.log(user1.ricarica(10));
user1.ricarica(90);
user1.chiamata(10);
user1.getNumeroChiamate;
user1.chiamata(100);
user1.getNumeroChiamate;
user1.azzeraChiamate();
user1.getNumeroChiamate;
//# sourceMappingURL=index.js.map