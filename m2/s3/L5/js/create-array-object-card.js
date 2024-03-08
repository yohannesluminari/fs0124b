class Telefono {
    constructor(id, name, description, brand, imageUrl, price) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.brand = brand;
        this.imageUrl = imageUrl;
        this.price = price;
    }
}
function createPhoneCard(phone) {
    const template = document.getElementById('phone-template');
    const clone = document.importNode(template.content, true);

    clone.querySelector('.card-img-top').src = phone.imageUrl;
    clone.querySelector('.card-img-top').alt = phone.name;
    clone.querySelector('.card-title').textContent = phone.name;
    clone.querySelector('.price').textContent = phone.price;

    document.getElementById('phone-container').appendChild(clone);
}

// Funzione per creare una card e inviarla tramite una richiesta POST
async function createAndPostPhoneCard(phone) {
    const url = 'https://striveschool-api.herokuapp.com/api/product/';
    const headers = {
        'Content-Type': 'application/json'
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(phone)
        });

        if (!response.ok) {
            throw new Error('Errore durante la creazione della card');
        }

        console.log('Card creata con successo:', phone);
    } catch (error) {
        console.error('Si è verificato un errore:', error.message);
    }
}

// Array di nuovitelefoni
const phones = [
    new Telefono(1, "Modello 1", "Telefono", "Marca A", "./img/1.jpg", 329),
    new Telefono(2, "Modello 2", "Telefono", "Marca B", "./img/2.jpg", 409),
    new Telefono(3, "Modello 3", "Telefono", "Marca C", "./img/3.jpg", 799.99),
    new Telefono(4, "Modello 4", "Telefono", "Marca D", "./img/4.jpg", 129),
    new Telefono(5, "Modello 5", "Telefono", "Marca E", "./img/5.webp", 104),
    new Telefono(6, "Modello 6", "Telefono", "Marca F", "./img/6.webp", 104),
    new Telefono(7, "Modello 7", "Telefono", "Marca G", "./img/7.webp", 799.99),
    new Telefono(8, "Modello 8", "Telefono", "Marca H", "./img/8.webp", 129),
    new Telefono(9, "Modello 9", "Telefono", "Marca I", "./img/9.webp", 104),
    new Telefono(10, "Modello 10", "Telefono", "Marca L", "./img/10.webp", 104)
];

//crea una card per ciascuno
phones.forEach(phone => createPhoneCard(phone));