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

// Array di telefoni
const phones = [
    new Telefono(1, "Modello A", "Telefono con fotocamera da 12MP", "Marca X", "./img/1.png", 329),
    new Telefono(2, "Modello B", "Schermo OLED da 6.5 pollici", "Marca Y", "./img/2.png", 409),
    new Telefono(3, "Modello C", "Processore Octa-core e 8GB di RAM", "Marca Z", "./img/3.png", 799.99),
    new Telefono(4, "Modello D", "Design ultraleggero e resistente", "Marca X", "./img/4.png", 129),
    new Telefono(5, "Modello E", "Batteria ad alta capacità da 5000mAh", "Marca Y", "./img/5.png", 104),
    new Telefono(6, "Modello F", "Supporta la connettività 5G", "Marca Z", "./img/6.png", 104)
];

//crea una card per ciascuno
phones.forEach(phone => createPhoneCard(phone));