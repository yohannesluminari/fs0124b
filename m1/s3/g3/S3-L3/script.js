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

  invia.addEventListener('click', function(e) {
    e.preventDefault();

        let task = input.value;
        let li = document.createElement("li");

        li.textContent = task;
        lista.appendChild(li);
        input.value = ""; 
  

        // crea e cancella task
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
           
            li.remove();
        };

        li.appendChild(deleteButton);


        // completa task 
        li.addEventListener("click", function() {
        
        li.style.backgroundColor = 'green';
    });
  })