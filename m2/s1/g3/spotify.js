

// Definizione dell'array di brani musicali
let musica = [
    { nomeArtista: "Artista1", nomeCanzone: "Canzone1", durataCanzone: 180, numeroAscolti: 1000 },
    { nomeArtista: "Artista2", nomeCanzone: "Canzone2", durataCanzone: 240, numeroAscolti: 850 },
    { nomeArtista: "Artista3", nomeCanzone: "Canzone3", durataCanzone: 200, numeroAscolti: 1200 },
    // Aggiungi altri brani musicali come necessario
    // ...
];

// Genera 47 oggetti brani musicali casuali e li aggiunge all'array
for (let i = 4; i <= 50; i++) {
    let nuovoBrano = {
        nomeArtista: "Artista" + i,
        nomeCanzone: "Canzone" + i,
        durataCanzone: Math.floor(Math.random() * (300 - 120 + 1)) + 120, // Durata casuale tra 2 e 5 minuti (in secondi)
        numeroAscolti: Math.floor(Math.random() * (2000 - 500 + 1)) + 500 // Numero di ascolti casuale tra 500 e 2000
    };
    musica.push(nuovoBrano);
}

function creaContenutoBrani(musica) {
    let contenuto = "";
    for (let brano of musica) {
        contenuto += `<div>${brano.nomeArtista} - ${brano.nomeCanzone} (${brano.durataCanzone} sec, ${brano.numeroAscolti} ascolti)</div>`;
    }
    return contenuto;
}

// Ottieni l'elemento 'main' dal documento HTML
const main = document.querySelector('.main_content');

// Aggiungi il contenuto dell'array di brani musicali al 'main' del documento
main.innerHTML = creaContenutoBrani(musica);
