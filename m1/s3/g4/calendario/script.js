// variabili globali 

const todayDate = new Date();

let monthName = todayDate.toLocaleDateString('it-IT', { month: 'long' }); // nome del mese attuale 'long' - non numero ma parola

// seleziono gli elementi con cui interagire

const monthNameElement = document.querySelector('.month-name');
const dayWrapElement = document.querySelector('.day-wrap');

// scrivo il nome del mese nel documento
monthNameElement.innerText = monthName;

function getMonthLastDayNumber() {
    // creo oggetto con data attuale..ottengo anno mese 
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getFullMonth() + 1; // ottengo indice del mese succesivo a quello corrente
    // restituisco l'ultimo giorno del mese corrente...0 per indicare l'iltimo giorno rispetto al mese presente
    return new Date(year, month, 0).getDate(); // restituisce ultimo giorno del mese corrente
}

for(let i = 1;i <= getMonthLastDayNumber(); i++){

    const dayBox = document.createElement('div');
    dayBox.classList.add('day');
    dayBox.innerText = i;

    dayWrapElement.append(dayBox);

    if( i == todayDate.getDate()){
        dayBox.classList.add('today');
    }

}
