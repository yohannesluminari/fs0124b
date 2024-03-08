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

// Array di telefoni
const phones = [
    new Telefono(1, "Modello A", "Telefono con fotocamera da 12MP", "Marca X", "./img/1.jpg", 329),
    new Telefono(2, "Modello B", "Schermo OLED da 6.5 pollici", "Marca Y", "./img/2.jpg", 409),
    new Telefono(3, "Modello C", "Processore Octa-core e 8GB di RAM", "Marca Z", "./img/3.jpg", 799.99),
    new Telefono(4, "Modello D", "Design ultraleggero e resistente", "Marca X", "./img/4.jpg", 129),
    new Telefono(5, "Modello E", "Batteria ad alta capacità da 5000mAh", "Marca Y", "./img/5.webp", 104),
    new Telefono(6, "Modello F", "Supporta la connettività 5G", "Marca Z", "./img/6.webp", 104),
    new Telefono(7, "Modello C", "Processore Octa-core e 8GB di RAM", "Marca Z", "./img/7.webp", 799.99),
    new Telefono(8, "Modello D", "Design ultraleggero e resistente", "Marca X", "./img/8.webp", 129),
    new Telefono(9, "Modello E", "Batteria ad alta capacità da 5000mAh", "Marca Y", "./img/9.webp", 104),
    new Telefono(10, "Modello F", "Supporta la connettività 5G", "Marca Z", "./img/10.webp", 104)
];

//crea una card per ciascuno
phones.forEach(phone => createPhoneCard(phone));