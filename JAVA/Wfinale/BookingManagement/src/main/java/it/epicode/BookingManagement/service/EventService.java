package it.epicode.BookingManagement.service;

import it.epicode.BookingManagement.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EventService {
    @Autowired
    private EventRepository eventRepository;

    // Metodi per la gestione degli eventi come creazione, modifica ed eliminazione
}
