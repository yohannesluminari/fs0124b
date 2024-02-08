const rows = 9;
const cols = 10;
const rows1 = 3;
const cols1 = 7;
const totalCells = rows * cols;
const totalCells1 = rows * cols;
let numbers = [];

let numbers1 = [];


const table = document.getElementById("myTable");

// PRIMA TABELLA 90 CELLE
function creaTable() {
    for (let i = 0; i < rows; i++) {
        const row = table.insertRow();

        for (let j = 0; j < cols; j++) {
            const cell = row.insertCell();
            const cellText = document.createTextNode((i * cols) + j + 1);
            cell.append(cellText);
        }
    }
}

// SECONDA TABELLA 24 CELLE
const table1 = document.getElementById("myTable1");
function creaTable1() {
    for (let i = 0; i < rows1; i++) {
        const row = table1.insertRow();

        for (let j = 0; j < cols1; j++) {
            const cell = row.insertCell();
            const cellText = document.createTextNode((i * cols1) + j + 1);
            cell.append(cellText);
        }
    }
}

const cell = [rows][cols];
// estrai numeri prima tabella
function estraiNumeri() {
    const randomNumber = Math.floor(Math.random() * totalCells) + 1;
    if (numbers.includes(randomNumber)) {
        alert("Il numero " + randomNumber + " è già stato estratto!");
    } else {
        numbers.push(randomNumber);
        evidenzia(randomNumber);
    }
}

// estrai numeri seconda tabella
function estraiNumeri1() {
    const randomNumber1 = Math.floor(Math.random() * totalCells1) + 1;
    if (numbers.includes(randomNumber1)) {
        alert("Il numero " + randomNumber1 + " è già stato estratto!");
    } else {
        numbers.push(randomNumber1);
        evidenzia1(randomNumber1);
    }
}

// Questo funziona oerò c'ho capito poco perchè l,avevo cercato su internet perchè sto avendo difficoltà anche passando le righee colonne a risalire al valore della cella che mi serve
function evidenzia(number) {
    const cellIndex = number - 1;
    const row = Math.floor(cellIndex / cols);
    const col = cellIndex % cols;
    const cell = table.rows[row].cells[col];
    cell.style.backgroundColor = "red";
}

function evidenzia1(number1) {
    const cellIndex = number1 - 1;
    const row1 = Math.floor(cellIndex / cols1);
    const col1 = cellIndex % cols1;
    const cell1 = table.rows[row1].cells1[col1];
    cell1.style.backgroundColor = "red";
}


// Aggiungi un gestore di eventi per il click sul bottone
document.getElementById("estraiNumber").addEventListener("click", estraiNumeri);


creaTable();
creaTable1();