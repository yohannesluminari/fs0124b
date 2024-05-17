package com.example.Prenotazioni.service;

import com.example.Prenotazioni.models.Prenotazione;
import com.example.Prenotazioni.repositoryDao.PrenotazioneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PrenotazioneService {

    @Autowired
    private PrenotazioneRepository prenotazioneRepository;

    @Transactional
    public Prenotazione creaPrenotazione(Prenotazione prenotazione) {
        // Verifico se esiste già una prenotazione per la stessa postazione e data
        if (prenotazioneRepository.existsByPostazione_IdAndData(prenotazione.getPostazione().getId(), prenotazione.getData())) {
            throw new IllegalStateException("Postazione già prenotata per la data selezionata.");
        }
        //se nn ci sono prenotazioni salvo la nuova prenotzione
        return prenotazioneRepository.save(prenotazione);
    }
}
