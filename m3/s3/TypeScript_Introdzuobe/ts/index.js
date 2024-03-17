console.log('ciao sono paulo');
var variabile1 = 23;
var variabile2 = 'stefano';
var variabile3 = true;
var x;
// se assegno il tipo di dato non puo essere riassegnato con un tipo di dato diverso 
var y = 'EPICODE';
// se non assegno il tipo di dato volendo posso cambiare l'assegnazione ad un variabile contenente un numero con un altro tipo di dato
console.log(variabile1, variabile2, variabile3);
var sum = function (n1, n2) {
    return n1 + n2;
};
console.log(sum(variabile1, 23));
//DICHIRAZIONE DI ARRAY
var stringArray = ['stefano', 'ciao', 'paolo'];
stringArray.push('rules');
var anotherStringArray = [];
anotherStringArray.push(100);
console.log(stringArray);
console.log(anotherStringArray);
var StringNumber = CustomType = 50;
StringNumber = 'margherita';
console.log(StringNumber);
var person = {
    firstName: 'paolo',
    lastName: 'morandi',
    skills: ['singer, performer, developer']
};
var person2 = {
    firstName: 'marco',
    lastName: 'moro',
    skills: ['dancer, actor, developer']
};
var person3 = {
    firstName: 'luca',
    lastName: 'mirko',
};
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
