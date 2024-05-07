package com.example.Prenotazioni;

import com.example.Prenotazioni.models.Prenotazione;
import com.example.Prenotazioni.service.PrenotazioneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControlPrenotazioni {
    @Autowired
    private PrenotazioneService prenotazioneService;

    @PostMapping("/creaPrenotazione")
    public Prenotazione creaPrenotazione(@RequestBody Prenotazione prenotazione) {
        return prenotazioneService.creaPrenotazione(prenotazione);
    }
}
