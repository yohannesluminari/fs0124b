// Funzione per eliminare una carta telefono
async function deletePhoneCard(phoneId) {
    const url = `https://striveschool-api.herokuapp.com/api/product/${phoneId}`;
    const headers = {
        'Content-Type': 'application/json'
    };

    try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: headers
        });

        if (!response.ok) {
            throw new Error('Errore durante l\'eliminazione della carta telefonica');
        }

        // Identifica l'elemento HTML della carta tramite l'ID del telefono e rimuovilo
        const cardToRemove = document.querySelector(`[data-phone-id="${phoneId}"]`);
        if (cardToRemove) {
            cardToRemove.remove();
            console.log('Carta telefonica eliminata con successo:', phoneId);
        }
    } catch (error) {
        console.error('Si è verificato un errore:', error.message);
    }
}
