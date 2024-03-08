const deleteButton = clone.querySelector('.delete-btn');
deleteButton.addEventListener('click', () => deletePhoneCard(clone));

clone.querySelector('.card').dataset.phoneId = phone.id;
function createPhoneCard(phone) {
    const template = document.getElementById('phone-template');
    const clone = document.importNode(template.content, true);

    clone.querySelector('.card-img-top').src = phone.imageUrl;
    clone.querySelector('.card-img-top').alt = phone.name;
    clone.querySelector('.card-title').textContent = phone.name;
    clone.querySelector('.price').textContent = phone.price;

    const deleteButton = clone.querySelector('.delete-btn');
    deleteButton.addEventListener('click', () => deletePhoneCard(clone));

    document.getElementById('phone-container').appendChild(clone);
}

async function deletePhoneCard(card) {
    const url = 'https://striveschool-api.herokuapp.com/api/product/' + card.dataset.phoneId;
    const headers = {
        'Content-Type': 'application/json'
    };

    try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: headers
        });

        if (!response.ok) {
            throw new Error('Errore durante l\'eliminazione della card');
        }

        console.log('Card eliminata con successo');
        card.remove();
    } catch (error) {
        console.error('Si è verificato un errore:', error.message);
    }
}
