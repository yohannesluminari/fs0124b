// // modify-phone.js

// async function modifyPhone(phoneId, updatedPhoneData) {
//     const url = `https://example.com/api/phones/${phoneId}`; // Sostituisci con il vero endpoint
//     const headers = {
//         'Content-Type': 'application/json'
//     };

//     try {
//         const response = await fetch(url, {
//             method: 'PUT',
//             headers: headers,
//             body: JSON.stringify(updatedPhoneData)
//         });

//         if (!response.ok) {
//             throw new Error('Errore durante la modifica del telefono');
//         }

//         const updatedPhone = await response.json();
//         return updatedPhone;
//     } catch (error) {
//         console.error('Si è verificato un errore:', error.message);
//         throw error;
//     }
// }

// // Aggiungi event listener per la sottomissione del modulo
// document.getElementById('phone-form').addEventListener('submit', async function(event) {
//     event.preventDefault();

//     const phoneId = 1; // Da sostituire con l'ID del telefono da modificare
//     const updatedPhoneData = {
//         name: document.getElementById('phone-name').value,
//         description: document.getElementById('phone-description').value,
//         brand: document.getElementById('phone-brand').value,
//         imageUrl: document.getElementById('phone-imageUrl').value,
//         price: parseFloat(document.getElementById('phone-price').value)
//     };

//     try {
//         const updatedPhone = await modifyPhone(phoneId, updatedPhoneData);
//         // Aggiorna la visualizzazione del telefono nella pagina principale
//         updatePhoneCard(updatedPhone);
//         console.log('Telefono modificato con successo:', updatedPhone);
//     } catch (error) {
//         console.error('Errore durante la modifica del telefono:', error.message);
//     }
// });

// function updatePhoneCard(updatedPhone) {
//     // Trova la card del telefono nella pagina principale e aggiorna i suoi contenuti con i nuovi dati
//     const phoneCard = document.getElementById(`phone-${updatedPhone.id}`);
//     phoneCard.querySelector('.card-title').textContent = updatedPhone.name;
//     phoneCard.querySelector('.card-img-top').src = updatedPhone.imageUrl;
//     phoneCard.querySelector('.card-img-top').alt = updatedPhone.name;
//     phoneCard.querySelector('.price').textContent = updatedPhone.price;
// }


// // Funzione per eliminare la card corrispondente al click del bottone "Elimina"
// function deleteCardOnClick() {
//     // Trova tutti i bottoni "Elimina" nella pagina
//     const deleteButtons = document.querySelectorAll('.delete-button');
//     clone.querySelector('.delete-button').setAttribute('data-card-id', phone.id);

//     // Aggiungi un gestore di eventi click a ciascun bottone "Elimina"
//     deleteButtons.forEach(button => {
//         button.addEventListener('click', function() {
//             // Trova l'ID corrispondente della card
//             const cardId = this.dataset.cardId;

//             // Trova la card corrispondente all'ID e rimuovila dal DOM
//             const cardToRemove = document.getElementById(cardId);
//             if (cardToRemove) {
//                 cardToRemove.remove();
//             } else {
//                 console.log('La card corrispondente non è stata trovata.');
//             }
//         });
//     });
// }

// // Chiama la funzione per eliminare la card corrispondente al click del bottone "Elimina"
// deleteCardOnClick();
