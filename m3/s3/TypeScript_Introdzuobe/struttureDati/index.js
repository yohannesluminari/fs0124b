var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//LEZIONE 2
var Days;
(function (Days) {
    Days[Days["monday"] = 1] = "monday";
    Days[Days["tuesday"] = 2] = "tuesday";
    Days[Days["wednesday"] = 3] = "wednesday";
    Days[Days["thursday"] = 4] = "thursday";
    Days[Days["friday"] = 5] = "friday";
    Days[Days["saturday"] = 6] = "saturday";
    Days[Days["sunday"] = 7] = "sunday";
})(Days || (Days = {}));
console.log(Days.sunday);
//CLASSI
var Studente = /** @class */ (function () {
    function Studente(_nome, _cognome) {
        this.nome = _nome;
        this.cognome = _cognome;
    }
    Studente.prototype.getStudente = function () {
        return "".concat(this.nome, "  ").concat(this.cognome);
    };
    Studente.prototype.numeroRandom = function () {
        return Math.floor(Math.random() * 11);
    };
    Studente.prototype.somma = function (num1) {
        return num1 + this.numeroRandom();
    };
    return Studente;
}());
var nuovoStudente = new Studente('Mario', 'Rossi');
console.log(nuovoStudente.getStudente());
console.log(nuovoStudente.somma(15));
//SOTTOCLASSE
var Utente = /** @class */ (function (_super) {
    __extends(Utente, _super);
    function Utente(_nome, _cognome, _eta) {
        var _this = _super.call(this, _nome, _cognome) || this;
        _this.eta = _eta;
        return _this;
    }
    Utente.prototype.getStudente = function () {
        return "".concat(this.nome, " ").concat(this.cognome, " di anni ").concat(this.eta);
    };
    return Utente;
}(Studente));
var nuovoUtente = new Utente('Luca', 'Rossi', 45);
console.log(nuovoUtente.getStudente());
//RELAZIONI 
var Phone = /** @class */ (function () {
    function Phone(_numero) {
        this.numero = _numero;
    }
    return Phone;
}());
var UtentePhone = /** @class */ (function () {
    function UtentePhone(_nome, _cognome, _numeri) {
        this.nome = _nome;
        this.cognome = _cognome;
        this.numeri = _numeri;
    }
    return UtentePhone;
}());
var nuovoUtentePhone = new UtentePhone('Mario', 'Rossi', [29449292, 674727272, 9834394389]);
console.log(nuovoUtentePhone);
