package it.epicode.BookingManagement.service;

import it.epicode.BookingManagement.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookingService {
    @Autowired
    private BookingRepository bookingRepository;

    // Metodi per la gestione delle prenotazioni come prenotazione e cancellazione
}