// function aggiungiTask() {
//     let input = document.getElementById("input");
//     let lista = document.getElementById("lista");

//     if (input.value !== "") {

//       let task = input.value;
//       let li = document.createElement("li");

//       li.textContent = task;
//       lista.appendChild(li);
//       input.value = ""; 
//     } else {
//       alert("Inserisci una task");
//     }
//   }


let input = document.getElementById("input");
let lista = document.getElementById("lista");


const invia = document.getElementById('invia');

invia.addEventListener('click', function (e) {
    e.preventDefault();

    let task = input.value;
    let li = document.createElement("li");

    li.textContent = task;
    lista.appendChild(li);
    input.value = "";


    // crea e cancella task
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
        li.remove();
        // ho avuto difficoltà a gestire il layout degli li e i bottoni corrispondent. Ho pensato di creare un div 
        // per mettere dentro gli li e i bottoni per gestirlo meglio ma mi sembrava di fare  un casino e niente questo 
        //ok credo fosse il display:flex che avveo messo sugli li nel css ora sembra funzionare quindi immagino fosse quello
    };

    li.appendChild(deleteButton);


    // completa task 
    li.addEventListener("click", function () {

        li.style.backgroundColor = 'green';

    });
})