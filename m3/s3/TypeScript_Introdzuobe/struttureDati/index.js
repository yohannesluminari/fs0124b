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
        getStudente();
        string;
        {
            return "".concat(this.nome, "  ").concat(this.cognome);
        }
    }
    return Studente;
}());
var nuovoStudnete = new Studente('Mario', 'Rossi');
console.log(nuovoStudnete.getStudente());
