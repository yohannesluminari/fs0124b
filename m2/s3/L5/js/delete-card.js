// Funzione per eliminare la card corrispondente al click del bottone "Elimina"
// Catturando l'errore nella card mi dice che non trova l'elemento in questo caso l'id della card 
function deleteCardOnClick() {

    const deleteButtons = document.querySelectorAll('.delete-button');

    deleteButtons.forEach(button => {
        button.addEventListener('click', async function() {
        
            const cardId = this.dataset.cardId;

            
            const cardToRemove = document.getElementById(cardId);
            if (cardToRemove) {
                cardToRemove.remove();
                
                try {
                    const response = await fetch(`https://striveschool-api.herokuapp.com/api/product/${cardId}`, {
                        method: 'DELETE',
                        headers: {
                            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhYzk0YzJkN2IxMTAwMTkwZTZkYjgiLCJpYXQiOjE3MDk5MDQ3MTgsImV4cCI6MTcxMTExNDMxOH0.XkaYR5emkds_eFxe7-sV7h2pAdxheVALxtpOGk6yeFg"
                        }
                    });
                    if (!response.ok) {
                        throw new Error('Errore durante l\'eliminazione del prodotto');
                    }
                    console.log('Prodotto eliminato con successo:', cardId);
                } catch (error) {
                    console.error('Errore:', error.message);
                }
            } else {
                console.log('La card corrispondente non è stata trovata.');
            }
        });
    });
}

deleteCardOnClick();




// const deleteButtons = document.querySelectorAll('.delete-button');
// deleteButtons.forEach(button => {
//     button.addEventListener('click', async function() {

//         const card = this.closest('.col');
        
//         const phoneId = card.dataset.phoneId;

//         if (phoneId === 1) {
//             try {
//                 const response = await fetch(`https://striveschool-api.herokuapp.com/api/product/${phoneId}`, {
//                     method: 'DELETE',
//                     headers: {
//                         'Content-Type': 'application/json',
//                         "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhYzk0YzJkN2IxMTAwMTkwZTZkYjgiLCJpYXQiOjE3MDk5MDQ3MTgsImV4cCI6MTcxMTExNDMxOH0.XkaYR5emkds_eFxe7-sV7h2pAdxheVALxtpOGk6yeFg"
//                     }
//                 });

//                 if (response.ok) {
                    
//                     card.remove();
//                     console.log('Card telefono con id = 1 eliminata con successo.');
//                 } else {
//                     console.error('Si è verificato un errore durante l\'eliminazione della card telefono con id = 1.');
//                 }
//             } catch (error) {
//                 console.error('Si è verificato un errore durante l\'invio della richiesta DELETE:', error);
//             }
//         } else {
//             console.log('La card telefono con id diverso da 1 non può essere eliminata.');
//         }
//     });
// });
